import { ProductList } from '@/components/ui/productList'
import { SectionTitle } from '@/components/ui/sectionTitle'
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
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  })

  if (!product) return null

  return (
    <div className="flex flex-col gap-8 pb-8 lg:container lg:mx-auto">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
        <ProductInfo product={computeProductTotalPrice(product)} />
      </div>
      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  )
}
