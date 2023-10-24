import { Badge } from '@/components/ui/badge'
import { ProductItem } from '@/components/ui/productItem'
import { computeProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'
import { PercentIcon } from 'lucide-react'

export default async function Offers() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })
  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase lg:w-1/6 lg:justify-center lg:py-2"
        variant="outline"
      >
        <PercentIcon size={16} />
        Ofertas
      </Badge>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-10">
        {deals.map((deal) => (
          <ProductItem key={deal.id} product={computeProductTotalPrice(deal)} />
        ))}
      </div>
    </div>
  )
}
