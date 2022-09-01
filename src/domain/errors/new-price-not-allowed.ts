export class NewPriceNotAllowed extends Error {
  constructor(errorMessage: string = 'New product price is not allowed') {
    super(errorMessage)
  }
}
