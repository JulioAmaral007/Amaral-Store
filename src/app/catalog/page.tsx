import { Badge } from '@/components/ui/badge'
import { prismaClient } from '@/lib/prisma'
import { Shapes } from 'lucide-react'
import { CategoryItem } from './components/categoryItem'

export default async function Catalog() {
  const categories = await prismaClient.category.findMany({})
  return (
    <div className="flex flex-col gap-8 p-5 lg:container lg:mx-auto">
      <Badge variant="heading">
        <Shapes size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
