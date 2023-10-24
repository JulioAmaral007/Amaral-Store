import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { PercentIcon } from 'lucide-react'

export default function OffersLoading() {
  return (
    <div className="flex flex-col gap-8 p-5 lg:container lg:mx-auto">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase lg:w-1/6 lg:justify-center lg:py-2"
        variant="outline"
      >
        <PercentIcon size={16} />
        Ofertas
      </Badge>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-10">
        {[...Array(15)].map((x, i) => (
          <Skeleton
            className="flex aspect-square w-[156px] items-center justify-center rounded-lg bg-accent"
            key={i}
          />
        ))}
      </div>
    </div>
  )
}
