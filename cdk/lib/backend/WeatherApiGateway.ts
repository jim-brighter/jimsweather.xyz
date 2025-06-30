import { LambdaIntegration, LambdaRestApi, SecurityPolicy } from 'aws-cdk-lib/aws-apigateway'
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager'
import { IFunction } from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'

export class WeatherApiGateway extends LambdaRestApi {
  constructor(scope: Construct, defaultErrorLambda: IFunction, cert: ICertificate) {
    super(scope, 'WeatherApi', {
      handler: defaultErrorLambda,
      proxy: false,
      domainName: {
        certificate: cert,
        domainName: 'api.jimsweather.xyz',
        securityPolicy: SecurityPolicy.TLS_1_2
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
  }

  setupGateway(handler: IFunction) {
    const api = this.root.addResource('weather')
    api.addMethod('GET', new LambdaIntegration(handler))
  }
}
