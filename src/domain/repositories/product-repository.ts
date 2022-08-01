import { Product } from '@/domain/entities/product'
import { ProductId } from '@/domain/value-objects/product-id'

export interface ProductRepository {
  save(product: Product): Promise<void>
  find(productId: ProductId): Promise<Product | undefined>
}
