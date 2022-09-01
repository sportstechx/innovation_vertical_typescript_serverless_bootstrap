import { asClass, createContainer, InjectionMode } from 'awilix'
import { MemoryProductRepository } from '@/infrastructure/repositories/memory-product-repository'
import { ProductPriceEditor } from '@/domain/services/product-price-editor'

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
}).register({
  productRepository: asClass(MemoryProductRepository),
  productPriceEditor: asClass(ProductPriceEditor)
})

