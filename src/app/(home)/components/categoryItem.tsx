import { Badge } from '@/components/ui/badge'
import { CATEGORY_ICON } from '@/constants/categoryIcon'
import { Category } from '@prisma/client'

interface CategoryItemProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div>
      <Badge
        className="py-3 flex justify-center items-center gap-2 rounded-lg"
        variant="outline"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="font-bold text-xs">{category.name}</span>
      </Badge>
    </div>
  )
}
