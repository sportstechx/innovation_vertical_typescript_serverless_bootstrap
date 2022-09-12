import { asClass, createContainer } from 'awilix'
import { MemoryProductRepository } from '@/infrastructure/repositories/memory-product-repository'
import { ProductPriceEditor } from '@/domain/services/product-price-editor'
import { CreateProductUseCase } from '@/application/use-cases/create-product/create-product-use-case'
import { ProductRepository } from '@/domain/repositories/product-repository'

export interface ServiceContainer {
  productRepository: ProductRepository
}

export const container = createContainer().register({
  productRepository: asClass(MemoryProductRepository),
  productPriceEditor: asClass(ProductPriceEditor),
  createProductUseCase: asClass(CreateProductUseCase)
})

