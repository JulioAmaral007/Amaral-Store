import { Badge } from '@/components/ui/badge'
import { ProductItem } from '@/components/ui/productItem'
import { CATEGORY_ICON } from '@/constants/categoryIcon'

import { computeProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'

export default async function CategoryProducts({ params }: any) {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  })

  if (!category) {
    return null
  }
  return (
    <div className="flex flex-col gap-8 p-5 lg:container lg:mx-auto">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase lg:w-1/6 lg:justify-center lg:py-2"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-10">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  )
}
