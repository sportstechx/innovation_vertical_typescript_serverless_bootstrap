import { CurrencyType } from '@/domain/value-objects/currency-type'

export class ProductPrice {
  constructor(private price: number, private currency: CurrencyType) {
  }

  public getPrice(): number {
    return this.price
  }

  public toString(): string {
    return `${this.price} ${this.currency}`
  }

  public isLowerThan(priceToCompare: ProductPrice): boolean {
    return this.price < priceToCompare.getPrice()
  }
}
