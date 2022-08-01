import { UseCase } from '@/application/use-cases/create-product/use-case'
import { Product } from '@/domain/entities/product'
import { ProductPrice } from '@/domain/value-objects/product-price'
import { ProductId } from '@/domain/value-objects/product-id'

export class CreateProductUseCase implements UseCase<any> {
  public async execute(name: string, price: number): Promise<any> {
    const product = new Product(
      new ProductId(),
      name,
      new ProductPrice(price)
    )

    this.productRepository.save(product)
  }
}
