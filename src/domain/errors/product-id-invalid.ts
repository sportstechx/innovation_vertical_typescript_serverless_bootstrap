export class ProductIdInvalid extends Error {
  constructor(errorMessage: string = 'Product id is invalid') {
    super(errorMessage)
  }
}
