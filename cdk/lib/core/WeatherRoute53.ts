import { RestApiBase } from 'aws-cdk-lib/aws-apigateway'
import { IDistribution } from 'aws-cdk-lib/aws-cloudfront'
import { ARecord, HostedZone, IHostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53'
import { ApiGateway, CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets'
import { Construct } from 'constructs'

export class WeatherHostedZone extends HostedZone {
  constructor(scope: Construct) {
    super(scope, 'JimsWeatherHostedZone', {
      zoneName: 'jimsweather.xyz'
    })
  }
}

export class WeatherUIRecord extends ARecord {
  constructor(scope: Construct, zone: IHostedZone, distribution: IDistribution) {
    super(scope, 'JimsWeatherRootRecord', {
      zone,
      target: {
        aliasTarget: new CloudFrontTarget(distribution)
      }
    })
  }
}

export class WeatherApiRecord extends ARecord {
  constructor(scope: Construct, id: string, zone: IHostedZone, apiGateway: RestApiBase, region: string) {
    super(scope, id, {
      zone,
      recordName: 'api',
      region: region,
      target: RecordTarget.fromAlias(new ApiGateway(apiGateway))
    })
  }
}
