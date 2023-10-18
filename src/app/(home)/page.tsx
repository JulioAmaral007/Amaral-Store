import { prismaClient } from '@/lib/prisma'
import Image from 'next/image'
import Categories from './components/categories'
import ProductList from './components/productList'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  })
  return (
    <div className="">
      <Image
        className="h-auto w-full px-5"
        sizes="100vw"
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
        height={0}
        width={0}
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="font-bold uppercase pl-5 mb-2">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        className="h-auto w-full px-5"
        sizes="100vw"
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses!"
        height={0}
        width={0}
      />
    </div>
  )
}
