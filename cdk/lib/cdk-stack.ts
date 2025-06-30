import { Stack, StackProps } from 'aws-cdk-lib'
import { IHostedZone } from 'aws-cdk-lib/aws-route53'
import { Secret } from 'aws-cdk-lib/aws-secretsmanager'
import { Construct } from 'constructs'
import { WeatherApiGateway } from './backend/WeatherApiGateway'
import { DefaultErrorLambda, WeatherLambda } from './backend/WeatherLambda'
import { SECRET_ARN } from './core/constants'
import { WeatherCertificate } from './core/WeatherCert'
import { WeatherApiRecord, WeatherHostedZone, WeatherUIRecord } from './core/WeatherRoute53'
import { WeatherDistribution } from './frontend/WeatherDistribution'
import { WeatherUIBucket } from './frontend/WeatherUIBucket'
import { WeatherUIDeployment } from './frontend/WeatherUIDeployment'

export class JimsWeatherStack extends Stack {

  readonly hostedZone: IHostedZone

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    this.hostedZone = new WeatherHostedZone(this)
    const cert = new WeatherCertificate(this, this.hostedZone)

    this.createUI(cert)
    this.createAPI(cert)
  }

  private createUI(cert: WeatherCertificate) {
    const uiBucket = new WeatherUIBucket(this)

    const distribution = new WeatherDistribution(this, uiBucket, cert)

    new WeatherUIDeployment(this, uiBucket, distribution)

    new WeatherUIRecord(this, this.hostedZone, distribution)
  }

  private createAPI(cert: WeatherCertificate) {
    const defaultErrorLambda = new DefaultErrorLambda(this)

    const openweathermapSecret = Secret.fromSecretCompleteArn(this, 'WeatherSecret', SECRET_ARN)

    const weatherLambda = new WeatherLambda(this)

    openweathermapSecret.grantRead(weatherLambda)

    const apiGateway = new WeatherApiGateway(this, defaultErrorLambda, cert)
    apiGateway.setupGateway(weatherLambda)

    new WeatherApiRecord(this, 'JimsWeatherApiRecord', this.hostedZone, apiGateway, 'us-east-1')
  }
}
