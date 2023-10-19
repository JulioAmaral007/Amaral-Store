import { ArrowDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { Badge, BadgeProps } from './badge'

export function DiscountBadge({ children, className, ...props }: BadgeProps) {
  return (
    <Badge className={twMerge('px-2 py-[2px]', className)} {...props}>
      <ArrowDown size={14} /> {children}%
    </Badge>
  )
}
