import * as route53 from 'aws-cdk-lib/aws-route53'
import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'

export class JimsHostedZoneStack extends Stack {

  readonly hostedZone : route53.HostedZone

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // Hosted Zone
    this.hostedZone = new route53.HostedZone(this, 'JimsWeatherHostedZone', {
      zoneName: 'jimsweather.xyz'
    })
  }
}
