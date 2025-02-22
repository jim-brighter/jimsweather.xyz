#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { JimsWeatherStack } from '../lib/cdk-stack'
import { JimsWeatherStackWest } from '../lib/cdk-stack-west'

const app = new cdk.App()

const east = new JimsWeatherStack(app, 'JimsWeather', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' },
  crossRegionReferences: true
})

const west = new JimsWeatherStackWest(app, 'JimsWeatherWest', east.hostedZone, {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-west-2' },
  crossRegionReferences: true
})
