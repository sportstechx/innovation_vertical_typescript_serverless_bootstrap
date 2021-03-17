import { hello } from '@/handlers/hello'

describe('Hello Function', () => {
  it('should return dummy message', async () => {
    const response = await hello()
    const body = JSON.parse(response.body)

    expect(response.statusCode).toBe(200)
    expect(body.message).toBe('Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!')
  })
})
