import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs'
import { Construct } from 'constructs'

export class DefaultErrorLambda extends Function {
  constructor(scope: Construct) {
    super(scope, 'DefaultErrorHandler', {
      runtime: Runtime.NODEJS_24_X,
      handler: 'index.handler',
      reservedConcurrentExecutions: 2,
      code: Code.fromInline(`
        exports.handler = async (event) => {
          return {
            statusCode: 404,
            body: JSON.stringify({
              errorMessage: 'Not Found'
            })
          }
        }
      `)
    })
  }
}

export class WeatherLambda extends NodejsFunction {
  constructor(scope: Construct) {
    super(scope, 'WeatherHandler', {
      runtime: Runtime.NODEJS_24_X,
      handler: 'handler',
      entry: '../lambda/weather.js',
      reservedConcurrentExecutions: 2,
      logGroup: new LogGroup(scope, 'WeatherLambdaLogGroup', {
        retention: RetentionDays.THREE_DAYS
      })
    })
  }
}
