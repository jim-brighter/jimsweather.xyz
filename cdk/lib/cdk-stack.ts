import { Stack, StackProps, RemovalPolicy, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment';
import * as certmanager from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodelambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as secrets from 'aws-cdk-lib/aws-secretsmanager';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class JimsWeatherStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Hosted Zone
    const hostedZone = new route53.HostedZone(this, 'JimsWeatherHostedZone', {
      zoneName: 'jimsweather.xyz'
    });

    // UI Bucket
    const uiBucket = new s3.Bucket(this, 'JimsWeatherBucket', {
      bucketName: 'jimsweather.xyz',
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      versioned: true,
      publicReadAccess: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
      accessControl: s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      lifecycleRules: [{
        enabled: true,
        expiredObjectDeleteMarker: true,
        noncurrentVersionExpiration: Duration.days(30)
      }]
    });

    // SSL Certificate
    const cert = new certmanager.Certificate(this, 'JimsWeatherCertificate', {
      domainName: '*.jimsweather.xyz',
      subjectAlternativeNames: ['jimsweather.xyz'],
      validation: certmanager.CertificateValidation.fromDns(hostedZone)
    });

    // Cloudfront
    const distribution = new cloudfront.CloudFrontWebDistribution(this, 'JimsWeatherDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: uiBucket
          },
          behaviors: [
            {
              isDefaultBehavior: true,
              pathPattern: '*',
              compress: true,
              allowedMethods: cloudfront.CloudFrontAllowedMethods.GET_HEAD_OPTIONS,
              cachedMethods: cloudfront.CloudFrontAllowedCachedMethods.GET_HEAD_OPTIONS,
              defaultTtl: Duration.days(90),
              minTtl: Duration.days(30),
              maxTtl: Duration.days(365)
            }
          ]
        }
      ],
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      defaultRootObject: 'index.html',
      errorConfigurations: [
        {
          errorCode: 404,
          responsePagePath: '/',
          responseCode: 200,
          errorCachingMinTtl: Duration.days(30).toSeconds()
        },
        {
          errorCode: 403,
          responsePagePath: '/',
          responseCode: 200,
          errorCachingMinTtl: Duration.days(30).toSeconds()
        }
      ],
      viewerCertificate: {
        aliases: ['jimsweather.xyz'],
        props: {
          minimumProtocolVersion: 'TLSv1.2_2021',
          sslSupportMethod: 'sni-only',
          acmCertificateArn: cert.certificateArn
        }
      }
    });

    // S3 Deployment
    new s3Deployment.BucketDeployment(this, 'JimsWeatherUIDeployment', {
      sources: [s3Deployment.Source.asset('../ui')],
      exclude: ['build.js'],
      destinationBucket: uiBucket,
      distribution: distribution
    });

    // Default Error Lambda
    const defaultErrorLambda = new lambda.Function(this, 'DefaultErrorHandler', {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          return {
            statusCode: 404,
            body: JSON.stringify({
              errorMessage: 'Not Found'
            })
          }
        }
      `)
    });

    // Secret
    const openweathermapSecret = secrets.Secret.fromSecretCompleteArn(this, 'WeatherSecret', 'arn:aws:secretsmanager:us-east-1:108929950724:secret:jimsweather/openweathermap-api-key-MYDqHT');

    // Weather Lambda
    const weatherLambda = new nodelambda.NodejsFunction(this, 'WeatherHandler', {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: 'handler',
      entry: '../lambda/weather.js',
      environment: {
        OPEN_WEATHER_MAP_API_KEY: openweathermapSecret.secretValue.unsafeUnwrap()
      },
      logRetention: logs.RetentionDays.ONE_WEEK
    });

    // REST API
    const restApi = new apigw.LambdaRestApi(this, 'WeatherApi', {
      handler: defaultErrorLambda,
      proxy: false,
      domainName: {
        certificate: cert,
        domainName: 'api.jimsweather.xyz',
        securityPolicy: apigw.SecurityPolicy.TLS_1_2
      }
    });

    const api = restApi.root.addResource('weather');
    api.addCorsPreflight({
      allowOrigins: ['*'],
      allowHeaders: ['*'],
      allowCredentials: true
    });
    api.addMethod('GET', new apigw.LambdaIntegration(weatherLambda));

    // Route53 Records
    new route53.ARecord(this, 'JimsWeatherRootRecord', {
      zone: hostedZone,
      target: {
        aliasTarget: new targets.CloudFrontTarget(distribution)
      }
    });

    new route53.ARecord(this, 'JimsWeatherApiRecord', {
      zone: hostedZone,
      recordName: 'api',
      target: route53.RecordTarget.fromAlias(new targets.ApiGateway(restApi))
    });
  }
}
