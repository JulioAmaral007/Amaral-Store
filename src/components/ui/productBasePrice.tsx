import { formatPrice } from '@/helpers/formatPrice'

interface IProductPriceProps {
  className?: string
  price: number
}

export function ProductPrice({ price, className }: IProductPriceProps) {
  const formattedPrice = formatPrice(price)
  return <p className={className}>{formattedPrice}</p>
}
