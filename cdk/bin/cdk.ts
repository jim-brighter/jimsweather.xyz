#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { JimsWeatherStack } from '../lib/cdk-stack'
import { JimsWeatherStackWest } from '../lib/cdk-stack-west'
import { JimsWeatherStackRoute53 } from '../lib/route53'
import { JimsHostedZoneStack } from '../lib/hosted-zone'

const app = new cdk.App()

const hostedZone = new JimsHostedZoneStack(app, 'JimsHostedZone', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' },
  crossRegionReferences: true
})

const east = new JimsWeatherStack(app, 'JimsWeather', hostedZone, {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' },
  crossRegionReferences: true
})

const west = new JimsWeatherStackWest(app, 'JimsWeatherWest', hostedZone, {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-west-2' },
  crossRegionReferences: true
})

new JimsWeatherStackRoute53(app, 'JimsWeatherRoutes', hostedZone, east, west, {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' },
  crossRegionReferences: true
})
