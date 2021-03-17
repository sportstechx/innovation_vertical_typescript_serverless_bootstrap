import middy from 'middy'
import { jsonBodyParser, httpEventNormalizer, httpErrorHandler } from 'middy/middlewares'
import { APIGatewayProxyResult } from 'aws-lambda'

/**
 * Function that has all the business logic
 *
 * @returns Promise<APIGatewayProxyResult>
 */
async function hello (): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!'
    })
  }
}

/**
 * Wrapping hello function with middlewares using middy.
 *
 * @see https://github.com/middyjs/middy
 */
const handler = middy(hello)
  .use(jsonBodyParser())
  .use(httpEventNormalizer())
  .use(httpErrorHandler())

export {
  handler,
  hello
}
