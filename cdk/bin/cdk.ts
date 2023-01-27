#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { JimsWeatherStack } from '../lib/cdk-stack';

const app = new cdk.App();
new JimsWeatherStack(app, 'JimsWeather', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
