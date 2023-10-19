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
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <PercentIcon size={16} />
        Ofertas
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {deals.map((deal) => (
          <ProductItem key={deal.id} product={computeProductTotalPrice(deal)} />
        ))}
      </div>
    </div>
  )
}
