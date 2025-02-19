import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as certmanager from 'aws-cdk-lib/aws-certificatemanager'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as secrets from 'aws-cdk-lib/aws-secretsmanager'
import * as nodelambda from 'aws-cdk-lib/aws-lambda-nodejs'
import * as logs from 'aws-cdk-lib/aws-logs'
import * as apigw from 'aws-cdk-lib/aws-apigateway'
import { JimsHostedZoneStack } from './hosted-zone'

export class JimsWeatherStackWest extends Stack {

  readonly apiGateway : apigw.LambdaRestApi

  constructor(scope: Construct, id: string, hostedZoneStack: JimsHostedZoneStack, props?: StackProps) {
    super(scope, id, props)

    // SSL Certificate
    const cert = new certmanager.Certificate(this, 'JimsWeatherCertificate', {
      domainName: '*.jimsweather.xyz',
      subjectAlternativeNames: ['jimsweather.xyz'],
      validation: certmanager.CertificateValidation.fromDns(hostedZoneStack.hostedZone)
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
