import { UseCase } from '@/application/use-cases/create-product/use-case'
import { Product } from '@/domain/entities/product'
import { ProductPrice } from '@/domain/value-objects/product-price'
import { ProductId } from '@/domain/value-objects/product-id'
import { CurrencyType } from '@/domain/value-objects/currency-type'
import { ProductRepository } from '@/domain/repositories/product-repository'

export class CreateProductUseCase implements UseCase<string> {
  constructor (
    private readonly productRepository: ProductRepository
  ) {}

  public async execute(name: string, price: number): Promise<string> {
    const product = new Product(
      new ProductId('1234567'),
      name,
      new ProductPrice(price, CurrencyType.EURO)
    )

     await this.productRepository.save(product)

    return product.getId().toString()
  }
}
