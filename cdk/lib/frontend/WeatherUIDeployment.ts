import { IDistribution } from 'aws-cdk-lib/aws-cloudfront'
import { IBucket } from 'aws-cdk-lib/aws-s3'
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment'
import { Construct } from 'constructs'

export class WeatherUIDeployment extends BucketDeployment {
  constructor(scope: Construct, bucket: IBucket, distribution: IDistribution) {
    super(scope, 'JimsWeatherUIDeployment', {
      sources: [Source.asset('../ui/dist')],
      exclude: ['build.js'],
      destinationBucket: bucket,
      distribution: distribution
    })
  }
}
