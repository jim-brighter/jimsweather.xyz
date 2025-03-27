import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as certmanager from 'aws-cdk-lib/aws-certificatemanager'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as secrets from 'aws-cdk-lib/aws-secretsmanager'
import * as nodelambda from 'aws-cdk-lib/aws-lambda-nodejs'
import * as logs from 'aws-cdk-lib/aws-logs'
import * as apigw from 'aws-cdk-lib/aws-apigateway'
import * as route53 from 'aws-cdk-lib/aws-route53'
import * as targets from 'aws-cdk-lib/aws-route53-targets'

export class JimsWeatherStackWest extends Stack {

  constructor(scope: Construct, id: string, hostedZone: route53.IHostedZone, props?: StackProps) {
    super(scope, id, props)

    // SSL Certificate
    const cert = new certmanager.Certificate(this, 'JimsWeatherCertificate', {
      domainName: '*.jimsweather.xyz',
      subjectAlternativeNames: ['jimsweather.xyz'],
      validation: certmanager.CertificateValidation.fromDns(hostedZone)
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
    const apiGateway = new apigw.LambdaRestApi(this, 'WeatherApi', {
      handler: defaultErrorLambda,
      proxy: false,
      domainName: {
        certificate: cert,
        domainName: 'api.jimsweather.xyz',
        securityPolicy: apigw.SecurityPolicy.TLS_1_2
      },
      defaultCorsPreflightOptions: {
        allowOrigins: ['*'],
        allowHeaders: ['*'],
        allowCredentials: true
      },
      deployOptions: {
        throttlingBurstLimit: 3,
        throttlingRateLimit: 5
      }
    })

    const api = apiGateway.root.addResource('weather')
    api.addMethod('GET', new apigw.LambdaIntegration(weatherLambda))

    // Route53 API Record
    new route53.ARecord(this, 'JimsWeatherApiRecordWest', {
      zone: hostedZone,
      recordName: 'api',
      region: 'us-west-2',
      target: route53.RecordTarget.fromAlias(new targets.ApiGateway(apiGateway))
    })
  }
}
