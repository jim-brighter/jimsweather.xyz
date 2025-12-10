import { StackProps } from 'aws-cdk-lib'
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager'
import { IHostedZone } from 'aws-cdk-lib/aws-route53'
import { Construct } from 'constructs'
import { BaseWeatherStack } from './BaseWeatherStack'
import { WeatherCertificate } from './core/WeatherCert'

export class JimsWeatherStack extends BaseWeatherStack {
  protected hostedZone: IHostedZone
  protected cert: Certificate

  constructor(scope: Construct, id: string, hostedZone: IHostedZone, props?: StackProps) {
    super(scope, id, props)

    this.hostedZone = hostedZone
    this.cert = new WeatherCertificate(this, this.hostedZone)

    this.createUI()
    this.createAPI()
  }
}
