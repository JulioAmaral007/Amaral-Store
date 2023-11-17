'use client'

import { Button } from '@/components/ui/button'
import { DiscountBadge } from '@/components/ui/discountBadge'
import { ProductPrice } from '@/components/ui/productBasePrice'
import { formatPrice } from '@/helpers/formatPrice'
import { ProductWithTotalPrice } from '@/helpers/product'
import { CartContext } from '@/providers/cart'
import { ArrowLeft, ArrowRight, TruckIcon } from 'lucide-react'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'

interface ProductInfoProps {
  product: ProductWithTotalPrice
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)

  const { addProductToCart } = useContext(CartContext)

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1))
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity })

    toast.success('Adicionado ao carrinho com sucesso!', {
      position: 'bottom-center',
    })
  }

  return (
    <div className="flex flex-col px-5 lg:w-[40%] lg:rounded-lg lg:bg-accent lg:p-10">
      <h2 className="text-lg lg:text-2xl">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold lg:text-3xl">
          {formatPrice(product.totalPrice)}
        </h1>
        {product.discountPercent > 0 && (
          <DiscountBadge className="lg:text-base">
            {product.discountPercent}
          </DiscountBadge>
        )}
      </div>

      {product.discountPercent > 0 && (
        <ProductPrice
          price={Number(product.basePrice)}
          className="text-sm lg:text-base line-through opacity-75"
        />
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeft size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRight size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <Button
        className="mt-8 font-bold uppercase"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </Button>

      <section className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2 lg:bg-[#2A2A2A]">
        <div className=" flex items-center gap-3">
          <TruckIcon />
          <div className="flex flex-col">
            <h3 className="text-xs">
              Entrega via <span className="font-semibold">FSPacket®</span>
            </h3>
            <legend className="text-xs text-[#8162FF]">
              Envio para <span className="font-semibold">todo o Brasil</span>
            </legend>
          </div>
        </div>
        <p className="text-xs font-bold">Frete grátis</p>
      </section>
    </div>
  )
}
