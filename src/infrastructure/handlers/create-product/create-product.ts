import middy from 'middy'
import { jsonBodyParser, httpEventNormalizer, httpErrorHandler } from 'middy/middlewares'
import { APIGatewayProxyResult } from 'aws-lambda'
import { container } from '@/infrastructure/dependency-injection/container'
import { CreateProductUseCase } from '@/application/use-cases/create-product/create-product-use-case'
import { APIRequestEvent } from '@/infrastructure/handlers/api-request-event'

async function createProduct (
  { body }: APIRequestEvent<CreateProductRequest>
): Promise<APIGatewayProxyResult> {

  const useCase = container.resolve<CreateProductUseCase>('createProductUseCase')
  const productId = await useCase.execute(body.name, body.price)

  return {
    statusCode: 201,
    body: JSON.stringify({
      'id': productId
    })
  }
}

const handler = middy(createProduct)
  .use(jsonBodyParser())
  .use(httpEventNormalizer())
  .use(httpErrorHandler())

export {
  handler
}
