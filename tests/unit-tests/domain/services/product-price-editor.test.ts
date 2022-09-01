import { container } from '../../../../src/infrastructure/dependency-injection/container'
import { ProductPriceEditor } from '../../../../src/domain/services/product-price-editor'
import { Product } from '../../../../src/domain/entities/product'
import { ProductPrice } from '../../../../src/domain/value-objects/product-price'
import { ProductId } from '../../../../src/domain/value-objects/product-id'
import { CurrencyType } from '../../../../src/domain/value-objects/currency-type'
import { NewPriceNotAllowed } from '../../../../src/domain/errors/new-price-not-allowed'
import { MemoryProductRepository } from '@/infrastructure/repositories/memory-product-repository'

jest.mock('@/infrastructure/repositories/memory-product-repository')

const MockedProductRepository = MemoryProductRepository as jest.MockedClass<
  typeof MemoryProductRepository
>

describe('ProductPriceEditor', () => {
  const productPriceEditor = container.resolve<ProductPriceEditor>(
    'productPriceEditor'
  )

  const product = new Product(
    new ProductId('P-12345'),
  'Awesome product',
    new ProductPrice(100, CurrencyType.EURO)
  )

  it('should throw an error if new price is lower than allowed', async () => {
    MockedProductRepository.prototype.findMinimumPriceAllowed.mockResolvedValue(
      new ProductPrice(100, CurrencyType.EURO)
    )

    const promise = productPriceEditor.edit(product, new ProductPrice(10, CurrencyType.EURO))

    await expect(promise).rejects.toThrowError(NewPriceNotAllowed)
    expect(MockedProductRepository.prototype.findMinimumPriceAllowed).toHaveBeenCalled()
  })

  it('should change the price when new price is allowed', async () => {
    MockedProductRepository.prototype.findMinimumPriceAllowed.mockResolvedValue(
      new ProductPrice(100, CurrencyType.EURO)
    )

    const updatedProduct = await productPriceEditor.edit(product, new ProductPrice(150, CurrencyType.EURO))
    expect(updatedProduct.getPrice().getPrice()).toEqual(150)
  })
})
