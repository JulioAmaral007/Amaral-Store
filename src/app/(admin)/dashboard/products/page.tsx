import { prismaClient } from '@/lib/prisma'

export async function ProductsPage() {
  const products = await prismaClient.product.findMany()

  return <h1>products</h1>
}
