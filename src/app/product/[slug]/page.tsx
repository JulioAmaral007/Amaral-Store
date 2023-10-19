import { computeProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'
import { ProductImages } from './components/productImages'
import { ProductInfo } from './components/productInfo'

interface ProductDetailsProps {
  params: {
    slug: string
  }
}

export default async function ProductDetails({
  params: { slug },
}: ProductDetailsProps) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
  })

  if (!product) return null

  return (
    <div>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
    </div>
  )
}
