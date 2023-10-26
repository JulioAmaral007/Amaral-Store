import { createCheckout } from '@/actions/checkout'
import { createOrder } from '@/actions/order'
import { computeProductTotalPrice } from '@/helpers/product'
import { CartContext } from '@/providers/cart'
import { loadStripe } from '@stripe/stripe-js'
import { ShoppingCartIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { Badge } from './badge'
import { Button } from './button'
import { CartItem } from './cartItem'
import { ScrollArea } from './scroll-area'
import { Separator } from './separator'

export function Cart() {
  const { data } = useSession()

  const { products, subtotal, total, totalDiscount } = useContext(CartContext)

  const handleFinishPurchaseClick = async () => {
    if (!data?.user) {
      // TODO: redirecionar para o login
      return
    }

    const order = await createOrder(products, (data?.user as any).id)

    const checkout = await createCheckout(products, order.id)

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

    toast.success('Pedido finalizado com sucesso!', {
      position: 'bottom-center',
    })

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    })
  }

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge variant="heading">
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {/* RENDERIZAR OS PRODUTOS */}
      <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="text-center font-semibold">
                Carrinho vazio. Vamos fazer compras?
              </p>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Subtotal</p>
            <p>R$ {subtotal.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Entrega</p>
            <p>GRÁTIS</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Descontos</p>
            <p>- R$ {totalDiscount.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-sm font-bold">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>

          <Button
            className="mt-7 font-bold uppercase"
            onClick={handleFinishPurchaseClick}
          >
            Finalizar compra
          </Button>
        </div>
      )}
    </div>
  )
}
