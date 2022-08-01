import { ProductIdInvalid } from '@/domain/errors/product-id-invalid'

export class ProductId {
  private readonly id: string
  private readonly PRODUCT_ID_PREFIX = 'P-'

  constructor(id: string) {
    if (!id.startsWith(this.PRODUCT_ID_PREFIX)) {
      throw new ProductIdInvalid()
    }

    this.id = id
  }

  public equals(productId: ProductId): boolean {
    return this.id === productId.toString()
  }

  public toString(): string {
    return this.id
  }
}
