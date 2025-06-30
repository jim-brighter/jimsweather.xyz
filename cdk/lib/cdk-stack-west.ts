import { Stack, StackProps } from 'aws-cdk-lib'
import { IHostedZone } from 'aws-cdk-lib/aws-route53'
import * as secrets from 'aws-cdk-lib/aws-secretsmanager'
import { Construct } from 'constructs'
import { WeatherApiGateway } from './backend/WeatherApiGateway'
import { DefaultErrorLambda, WeatherLambda } from './backend/WeatherLambda'
import { SECRET_ARN } from './core/constants'
import { WeatherCertificate } from './core/WeatherCert'
import { WeatherApiRecord } from './core/WeatherRoute53'

export class JimsWeatherStackWest extends Stack {

  readonly hostedZone: IHostedZone

  constructor(scope: Construct, id: string, hostedZone: IHostedZone, props?: StackProps) {
    super(scope, id, props)

    this.hostedZone = hostedZone
    const cert = new WeatherCertificate(this, hostedZone)

    this.createAPI(cert)
  }

  private createAPI(cert: WeatherCertificate) {
    const defaultErrorLambda = new DefaultErrorLambda(this)

    const openweathermapSecret = secrets.Secret.fromSecretCompleteArn(this, 'WeatherSecret', SECRET_ARN)

    const weatherLambda = new WeatherLambda(this)

    openweathermapSecret.grantRead(weatherLambda)

    const apiGateway = new WeatherApiGateway(this, defaultErrorLambda, cert)
    apiGateway.setupGateway(weatherLambda)

    new WeatherApiRecord(this, 'JimsWeatherApiRecordWest', this.hostedZone, apiGateway, 'us-west-2')
  }
}
