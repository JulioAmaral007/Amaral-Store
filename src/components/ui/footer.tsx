import { Copyright } from 'lucide-react'

export default function Footer() {
  return (
    <div className="flex gap-1 bg-accent px-8 py-4 text-[0.625rem] opacity-75">
      <Copyright size={12} /> 2023 Copyright
      <span className="font-semibold">KX Store</span>
    </div>
  )
}
