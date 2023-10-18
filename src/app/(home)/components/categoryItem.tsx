import { Badge } from '@/components/ui/badge'
import { Category } from '@prisma/client'
import {
  Headphones,
  Keyboard,
  Monitor,
  Mouse,
  Speaker,
  SquareDashedBottomIcon,
} from 'lucide-react'

interface CategoryItemProps {
  category: Category
}

export default function CategoryItem({ category }: CategoryItemProps) {
  const categoryIcon = {
    keyboards: <Keyboard size={18} />,
    mouses: <Mouse size={18} />,
    monitors: <Monitor size={18} />,
    headphones: <Headphones size={18} />,
    mousepads: <SquareDashedBottomIcon size={18} />,
    speakers: <Speaker size={18} />,
  }
  return (
    <div>
      <Badge
        className="py-3 flex justify-center items-center gap-2 rounded-lg"
        variant="outline"
      >
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className="font-bold text-xs">{category.name}</span>
      </Badge>
    </div>
  )
}
