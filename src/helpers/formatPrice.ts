export function formatPrice(price: number) {
  if (isNaN(price)) {
    return 'Preço inválido'
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}
