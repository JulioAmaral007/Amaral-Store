import { Header } from '@/components/ui/header'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '500', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'KX Store',
  description:
    'Conectando clientes e produtos - Bem-vindo à nossa loja online, onde a sua próxima compra está a apenas um clique de distância. #EcommerceInovador 💻🌐🛍️',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
