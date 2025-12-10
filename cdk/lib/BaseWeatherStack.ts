import { Stack, StackProps } from "aws-cdk-lib";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { IHostedZone } from "aws-cdk-lib/aws-route53";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import { Construct } from "constructs";
import { WeatherApiGateway } from "./backend/WeatherApiGateway";
import { DefaultErrorLambda, WeatherLambda } from "./backend/WeatherLambda";
import { SECRET_ARN } from "./core/constants";
import { WeatherApiRecord, WeatherUIRecord } from "./core/WeatherRoute53";
import { WeatherDistribution } from "./frontend/WeatherDistribution";
import { WeatherUIBucket } from "./frontend/WeatherUIBucket";
import { WeatherUIDeployment } from "./frontend/WeatherUIDeployment";

export abstract class BaseWeatherStack extends Stack {
  protected abstract hostedZone: IHostedZone
  protected abstract cert: Certificate

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)
  }

  protected createUI() {
    const uiBucket = new WeatherUIBucket(this)
    const distribution = new WeatherDistribution(this, uiBucket, this.cert)
    new WeatherUIDeployment(this, uiBucket, distribution)
    new WeatherUIRecord(this, this.hostedZone, distribution)
  }

  protected createAPI() {
    const defaultErrorLambda = new DefaultErrorLambda(this)
    const weatherLambda = new WeatherLambda(this)
    const openweathermapSecret = Secret.fromSecretCompleteArn(this, 'WeatherSecret', SECRET_ARN)
    openweathermapSecret.grantRead(weatherLambda)
    const apiGateway = new WeatherApiGateway(this, defaultErrorLambda, this.cert)
    apiGateway.setupGateway(weatherLambda)
    new WeatherApiRecord(this, `JimsWeatherApiRecord-${this.region}`, this.hostedZone, apiGateway, this.region)
  }
}
