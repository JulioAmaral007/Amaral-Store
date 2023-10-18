import { ProductWithTotalPrice } from '@/helpers/product'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { Badge } from './badge'

interface ProductItemProps {
  product: ProductWithTotalPrice
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex flex-col gap-4 max-w-[176px]">
      <div className="relative bg-accent rounded-lg w-[156px] h-[170px] flex justify-center items-center">
        <Image
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          sizes="100vw"
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          style={{
            objectFit: 'contain',
          }}
        />

        {product.discountPercent > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDown size={14} /> {product.discountPercent}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercent > 0 ? (
            <>
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>
              <p className="opacity-75 line-through text-xs">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="font-semibold">R$ {product.basePrice.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  )
}
