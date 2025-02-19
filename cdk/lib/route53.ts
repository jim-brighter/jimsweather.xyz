import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { JimsWeatherStack } from './cdk-stack'
import * as route53 from 'aws-cdk-lib/aws-route53'
import * as targets from 'aws-cdk-lib/aws-route53-targets'
import { JimsWeatherStackWest } from './cdk-stack-west'
import { JimsHostedZoneStack } from './hosted-zone'

export class JimsWeatherStackRoute53 extends Stack {
  constructor(scope: Construct, id: string, hostedZoneStack: JimsHostedZoneStack, eastStack: JimsWeatherStack, westStack: JimsWeatherStackWest, props?: StackProps) {
    super(scope, id, props)

    // Route53 Records
    new route53.ARecord(this, 'JimsWeatherRootRecord', {
      zone: hostedZoneStack.hostedZone,
      target: {
        aliasTarget: new targets.CloudFrontTarget(eastStack.distribution)
      }
    })

    new route53.ARecord(this, 'JimsWeatherApiRecord', {
      zone: hostedZoneStack.hostedZone,
      recordName: 'api',
      region: 'us-east-1',
      target: route53.RecordTarget.fromAlias(new targets.ApiGateway(eastStack.apiGateway))
    })

    new route53.ARecord(this, 'JimsWeatherApiRecordWest', {
      zone: hostedZoneStack.hostedZone,
      recordName: 'api',
      region: 'us-west-2',
      target: route53.RecordTarget.fromAlias(new targets.ApiGateway(westStack.apiGateway))
    })
  }
}
