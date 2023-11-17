import { ProductItem } from '@/components/ui/productItem'
import { computeProductTotalPrice } from '@/helpers/product'
import { Product } from '@prisma/client'

interface ProductListProps {
  products: Product[]
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto lg:truncate lg:gap-7 xl:gap-5 px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={{
            ...product,
            totalPrice: computeProductTotalPrice(product),
          }}
          className="w-[156px] lg:w-[200px] lg:min-w-[200px]"
        />
      ))}
    </div>
  )
}
