import { Badge } from '@/components/ui/badge'
import { ProductItem } from '@/components/ui/productItem'
import { computeProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'
import { PercentIcon } from 'lucide-react'

export default async function Offers() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  })

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge variant="heading">
        <PercentIcon size={16} />
        Ofertas
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  )
}
