import { ProductId } from '@/domain/value-objects/product-id'
import { ProductPrice } from '@/domain/value-objects/product-price'

export class Product {
  constructor(
    private id: ProductId,
    private name: string,
    private price: ProductPrice
  ) {}

  public getId(): ProductId {
    return this.id
  }
}
