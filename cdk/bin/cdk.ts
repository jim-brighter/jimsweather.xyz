#!/usr/bin/env node
import { App } from 'aws-cdk-lib'
import 'source-map-support/register'
import { Route53DomainsClient, UpdateDomainNameserversCommand } from '@aws-sdk/client-route-53-domains'
import { JimsWeatherStack } from '../lib/cdk-stack'
import { JimsWeatherStackWest } from '../lib/cdk-stack-west'
import { HostedZoneStack } from '../lib/core/WeatherRoute53'

async function main() {
  const app = new App()

  const hostedZone = new HostedZoneStack(app, 'JimsWeatherHostedZone',
    {
      env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' },
      crossRegionReferences: true
    }
  )

  // Get the name servers from the hosted zone
  const nameServers = hostedZone.hostedZone.hostedZoneNameServers || []

  // Update the domain name servers using AWS SDK v3
  const route53DomainsClient = new Route53DomainsClient({ region: 'us-east-1' })
  const updateCommand = new UpdateDomainNameserversCommand({
    DomainName: 'jimsweather.xyz',
    Nameservers: nameServers.map(ns => ({ Name: ns }))
  })

  await route53DomainsClient.send(updateCommand)
  console.log('Successfully updated domain name servers for jimsweather.xyz')

  new JimsWeatherStack(app, 'JimsWeather', hostedZone.hostedZone,
    {
      env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' },
      crossRegionReferences: true
    }
  )

  new JimsWeatherStackWest(app, 'JimsWeatherWest', hostedZone.hostedZone,
    {
      env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-west-2' },
      crossRegionReferences: true
    }
  )
}

main().catch(err => {
  console.error('Error during CDK initialization:', err)
  process.exit(1)
})
