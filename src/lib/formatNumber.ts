export function formatNumber(value: number | undefined) {
  return new Intl.NumberFormat('pt-BR').format(value ?? 0)
}
