import { ProductRepository } from '@/domain/repositories/product-repository'
import { Product } from '@/domain/entities/product'
import { ProductPrice } from '@/domain/value-objects/product-price'
import { NewPriceNotAllowed } from '@/domain/errors/new-price-not-allowed'
import { ServiceContainer } from '@/infrastructure/dependency-injection/container'

export class ProductPriceEditor {
  private readonly productRepository: ProductRepository

  constructor(
    { productRepository }: ServiceContainer
  ) {
    this.productRepository = productRepository
  }

  public async edit(product: Product, newPrice: ProductPrice): Promise<Product> {
    const minimumPriceAllowed = await this.productRepository.findMinimumPriceAllowed()

    if (newPrice.isLowerThan(minimumPriceAllowed)) {
      throw new NewPriceNotAllowed('New product price is lower than allowed')
    }

    const updatedProduct = new Product(product.getId(), product.getName(), newPrice)
    await this.productRepository.save(updatedProduct)

    return updatedProduct
  }
}
