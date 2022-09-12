import { APIGatewayProxyEvent } from 'aws-lambda'

/**
 * This interface allows us to overwrite the 'body' property with any type that we want.
 * The default APIGatewayProxyEvent types the 'body' property as a string, but all of
 * our bodies are going to be parsed using the jsonBodyParser middleware, which doesn't
 * provide an own interface.
 */
export interface APIRequestEvent<T = unknown>
  extends Omit<APIGatewayProxyEvent, 'body'> {
  body: T
}
