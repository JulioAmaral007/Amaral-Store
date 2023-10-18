'use client'
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOut,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Button } from './button'
import { Card } from './card'
import { Separator } from './separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'

export function Header() {
  const { status, data } = useSession()

  const handleSignIn = async () => await signIn()

  const handleSignOut = async () => await signOut()

  return (
    <div>
      <Card className="flex justify-between p-[1.875rem] items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="text-left text-lg font-semibold">
                Menu
              </SheetTitle>
            </SheetHeader>

            {status === 'authenticated' && data?.user && (
              <>
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>

                    {data.user.image ? (
                      <AvatarImage src={data.user.image!} />
                    ) : (
                      <AvatarImage src={data.user.name?.[0].toUpperCase()} />
                    )}
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="font-medium">{data.user.name}</p>
                    <p className="text-sm opacity-75">Boas compras!</p>
                  </div>
                </div>
                <Separator />
              </>
            )}

            <div className="mt-4 flex flex-col gap-2">
              {status === 'unauthenticated' && (
                <Button
                  onClick={handleSignIn}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogInIcon size={16} />
                  Fazer login
                </Button>
              )}

              {status === 'authenticated' && (
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogOut size={16} />
                  Fazer logout
                </Button>
              )}

              <Button variant="outline" className="w-full justify-start gap-2">
                <HomeIcon size={16} />
                Início
              </Button>

              <Button variant="outline" className="w-full justify-start gap-2">
                <PercentIcon size={16} />
                Ofertas
              </Button>

              <SheetClose asChild>
                <Link href="/catalog">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <ListOrderedIcon size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <h1 className="font-semibold text-lg">
          <span className="text-primary">KX</span> Store
        </h1>

        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </Card>
    </div>
  )
}
