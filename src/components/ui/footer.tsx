import { Copyright } from 'lucide-react'

export function Footer() {
  return (
    <div className="bg-accent px-8 py-4 text-[0.625rem] opacity-75 lg:text-sm">
      <div className="mx-auto lg:container">
        <Copyright size={12} /> 2023 Copyright
        <span className="font-semibold">KX Store</span>
      </div>
    </div>
  )
}
