import { CurrencyType } from '@/domain/value-objects/currency-type'

export class ProductPrice {
  constructor(private price: number, private currency: CurrencyType) {
  }

  public toString(): string {
    return `${this.price} ${this.currency}`
  }
}
