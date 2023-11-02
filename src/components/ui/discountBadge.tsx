import { cn } from '@/lib/utils'
import { ArrowDown } from 'lucide-react'
import { Badge, BadgeProps } from './badge'

export function DiscountBadge({ children, className, ...props }: BadgeProps) {
  return (
    <Badge className={cn('px-2 py-[2px]', className)} {...props}>
      <ArrowDown size={14} /> {children}%
    </Badge>
  )
}
