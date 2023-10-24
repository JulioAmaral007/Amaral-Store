import { ProductList } from '@/components/ui/productList'
import { SectionTitle } from '@/components/ui/sectionTitle'
import { prismaClient } from '@/lib/prisma'
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
    <div className="flex flex-col gap-8 py-8">
      <div className="flex lg:hidden">
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 55% de desconto em mouses!"
        />
      </div>

      <div className="hidden lg:flex">
        <PromoBanner
          src="/banner-home-lg-01.png"
          alt="Até 55% de desconto em mouses!"
        />
      </div>

      <div className="lg:container lg:mx-auto flex flex-col gap-8">
        <div className="px-5 lg:px-0">
          <Categories />
        </div>

        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <div className="lg:flex lg:px-0 lg:gap-10 lg:justify-center">
          <div className="flex">
            <PromoBanner
              src="/banner-home-02.png"
              alt="Até 55% de desconto em mouses!"
            />
          </div>

          <div className="hidden lg:flex">
            <PromoBanner
              src="/banner-home-03.png"
              alt="Até 55% de desconto em mouses!"
            />
          </div>
        </div>

        <div>
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <div className="flex lg:hidden">
          <PromoBanner
            src="/banner-home-03.png"
            alt="Até 55% de desconto em mouses!"
          />
        </div>

        <div className="hidden lg:flex ">
          <PromoBanner
            src="/banner-frete-gratis.png"
            alt="Até 55% de desconto em mouses!"
          />
        </div>

        <div className="">
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
      </div>
    </div>
  )
}
