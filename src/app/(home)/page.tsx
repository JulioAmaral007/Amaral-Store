import { ProductList } from '@/components/ui/productList'
import { SectionTitle } from '@/components/ui/sectionTitle'
import { prismaClient } from '@/lib/prisma'
import Image from 'next/image'
import { Categories } from './components/categories'
import { PromoBanner } from './components/promoBanner'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
  })

  return (
    <>
      <div className="mx-auto max-w-[1920px]">
        <Image
          src="/banner-home-lg-01.png"
          className="hidden h-auto w-full lg:block"
          width={0}
          height={0}
          sizes="100vw"
          alt="Até 55% de desconto esse mês!"
        />
      </div>

      <div className="container mx-auto flex flex-col gap-8 py-8">
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 55% de desconto esse mês!"
          className="lg:hidden"
        />

        <div className="px-5">
          <Categories />
        </div>

        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses!"
        />

        <div>
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <div>
          <PromoBanner
            src="/banner-home-03.png"
            alt="Até 55% de desconto em mouses!"
          />
        </div>

        <div>
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
      </div>
    </>
  )
}
