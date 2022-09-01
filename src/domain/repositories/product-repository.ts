import { Product } from '@/domain/entities/product'
import { ProductId } from '@/domain/value-objects/product-id'
import { ProductPrice } from '@/domain/value-objects/product-price'

export interface ProductRepository {
  save(product: Product): Promise<void>
  find(productId: ProductId): Promise<Product | undefined>
  findMinimumPriceAllowed(): Promise<ProductPrice>
}
