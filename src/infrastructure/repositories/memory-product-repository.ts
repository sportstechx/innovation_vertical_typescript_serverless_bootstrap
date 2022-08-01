import { Product } from '@/domain/entities/product'
import { ProductId } from '@/domain/value-objects/product-id'
import { ProductRepository } from '@/domain/repositories/product-repository'

export class MemoryProductRepository implements ProductRepository {
  private products: Product[]

  public async save(product: Product): Promise<void> {
    this.products.push(product)
  }

  public async find(productId: ProductId): Promise<Product | undefined> {
    return this.products.find(product => product.getId().equals(productId))
  }
}
