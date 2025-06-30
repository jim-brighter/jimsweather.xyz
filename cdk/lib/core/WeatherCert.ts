import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager'
import { IHostedZone } from 'aws-cdk-lib/aws-route53'
import { Construct } from 'constructs'

export class WeatherCertificate extends Certificate {
  constructor(scope: Construct, hostedZone: IHostedZone) {
    super(scope, 'JimsWeatherCertificate', {
      domainName: '*.jimsweather.xyz',
      subjectAlternativeNames: ['jimsweather.xyz'],
      validation: CertificateValidation.fromDns(hostedZone)
    })
  }
}
