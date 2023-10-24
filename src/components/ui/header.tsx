'use client'

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOut,
  MenuIcon,
  PackageSearchIcon,
  PercentIcon,
  ShoppingCartIcon,
  User2,
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Button } from './button'
import { Card } from './card'
import { Cart } from './cart'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu'
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
      <Card className="flex justify-between p-[1.875rem] items-center lg:container lg:mx-auto lg:border-0">
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
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

              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} />
                    Início
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/orders">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PackageSearchIcon size={16} />
                    Meus Pedidos
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/offers">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PercentIcon size={16} />
                    Ofertas
                  </Button>
                </Link>
              </SheetClose>

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

        <Link href="/">
          <h1 className="text-lg font-semibold">
            <span className="text-primary">KX</span> Store
          </h1>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-9">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start gap-2">
              Início
            </Button>
          </Link>

          <Separator
            orientation="vertical"
            className="h-7 bg-accent-foreground"
          />

          <Link href="/catalog">
            <Button variant="ghost" className="w-full justify-start gap-2">
              Catálogo
            </Button>
          </Link>

          <Separator
            orientation="vertical"
            className="h-7 bg-accent-foreground"
          />

          <Link href="/offers">
            <Button variant="ghost" className="w-full justify-start gap-2">
              Ofertas
            </Button>
          </Link>
        </div>

        <div className="flex gap-10">
          {status === 'unauthenticated' && (
            <Button variant="outline" onClick={handleSignIn}>
              Login
            </Button>
          )}

          {status === 'authenticated' && data.user && (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button size="icon" variant="outline">
                    <User2 />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/profile">Meu Perfil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/my-trips">Meus pedidos</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <ShoppingCartIcon />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-[350px]">
              <Cart />
            </SheetContent>
          </Sheet>
        </div>
      </Card>
    </div>
  )
}
