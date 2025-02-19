import { Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as certmanager from 'aws-cdk-lib/aws-certificatemanager'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as nodelambda from 'aws-cdk-lib/aws-lambda-nodejs'
import * as logs from 'aws-cdk-lib/aws-logs'
import * as secrets from 'aws-cdk-lib/aws-secretsmanager'
import * as apigw from 'aws-cdk-lib/aws-apigateway'
import { JimsHostedZoneStack } from './hosted-zone'

export class JimsWeatherStack extends Stack {

  readonly distribution : cloudfront.Distribution
  readonly apiGateway : apigw.LambdaRestApi

  constructor(scope: Construct, id: string, hostedZoneStack: JimsHostedZoneStack, props?: StackProps) {
    super(scope, id, props)

    // SSL Certificate
    const cert = new certmanager.Certificate(this, 'JimsWeatherCertificate', {
      domainName: '*.jimsweather.xyz',
      subjectAlternativeNames: ['jimsweather.xyz'],
      validation: certmanager.CertificateValidation.fromDns(hostedZoneStack.hostedZone)
    })

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
        noncurrentVersionExpiration: Duration.days(3)
      }]
    })

    // Cloudfront
    this.distribution = new cloudfront.Distribution(this, 'JimsWeatherDistribution', {
      defaultBehavior: {
        compress: true,
        origin: new origins.S3StaticWebsiteOrigin(uiBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: new cloudfront.CachePolicy(this, 'CachePolicy', {
          defaultTtl: Duration.days(90),
          minTtl: Duration.days(30),
          maxTtl: Duration.days(365)
        })
      },
      certificate: cert,
      sslSupportMethod: cloudfront.SSLMethod.SNI,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      domainNames: ['jimsweather.xyz'],
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responsePagePath: '/',
          responseHttpStatus: 200,
          ttl: Duration.days(30)
        },
        {
          httpStatus: 403,
          responsePagePath: '/',
          responseHttpStatus: 200,
          ttl: Duration.days(30)
        }
      ]
    })

    // S3 Deployment
    new s3Deployment.BucketDeployment(this, 'JimsWeatherUIDeployment', {
      sources: [s3Deployment.Source.asset('../ui')],
      exclude: ['build.js'],
      destinationBucket: uiBucket,
      distribution: this.distribution
    })

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
    })

    const openweathermapSecret = secrets.Secret.fromSecretCompleteArn(this, 'WeatherSecret', 'arn:aws:secretsmanager:us-east-1:108929950724:secret:jimsweather/openweathermap-api-key-MYDqHT')

    // Weather Lambda
    const weatherLambda = new nodelambda.NodejsFunction(this, 'WeatherHandler', {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: 'handler',
      entry: '../lambda/weather.js',
      logRetention: logs.RetentionDays.THREE_DAYS
    })

    openweathermapSecret.grantRead(weatherLambda)

    // REST API
    this.apiGateway = new apigw.LambdaRestApi(this, 'WeatherApi', {
      handler: defaultErrorLambda,
      proxy: false,
      domainName: {
        certificate: cert,
        domainName: 'api.jimsweather.xyz',
        securityPolicy: apigw.SecurityPolicy.TLS_1_2
      }
    })

    const api = this.apiGateway.root.addResource('weather')
    api.addCorsPreflight({
      allowOrigins: ['*'],
      allowHeaders: ['*'],
      allowCredentials: true
    })
    api.addMethod('GET', new apigw.LambdaIntegration(weatherLambda))
  }
}
