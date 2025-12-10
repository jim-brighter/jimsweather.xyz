#!/usr/bin/env node
import { App } from 'aws-cdk-lib'
import 'source-map-support/register'
import { JimsWeatherStack } from '../lib/cdk-stack'
import { JimsWeatherStackWest } from '../lib/cdk-stack-west'
import { HostedZoneStack } from '../lib/core/WeatherRoute53'

const app = new App()

const hostedZone = new HostedZoneStack(app, 'JimsWeatherHostedZone',
  {
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' },
    crossRegionReferences: true
  }
)

const east = new JimsWeatherStack(app, 'JimsWeather', hostedZone.hostedZone,
  {
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' },
    crossRegionReferences: true
  }
)

const west = new JimsWeatherStackWest(app, 'JimsWeatherWest', hostedZone.hostedZone,
  {
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-west-2' },
    crossRegionReferences: true
  }
)
