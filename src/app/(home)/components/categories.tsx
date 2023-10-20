import { prismaClient } from '@/lib/prisma'
import { CategoryItem } from './categoryItem'

export async function Categories() {
  const categories = await prismaClient.category.findMany({})
  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4 md:grid-cols-3 lg:flex lg:flex-row lg:px-32 lg:justify-between">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}
