import { prismaClient } from '@/lib/prisma'

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
  return <div></div>
}
