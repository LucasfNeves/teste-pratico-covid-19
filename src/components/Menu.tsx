'use client'

import { useIsMobile } from '@/hooks/useIsMobile'
import { ToggleMenu } from './ToggleMenu'
import { Sidebar } from './Sidebar'

/**
 * Componente de Menu que renderiza um menu diferente com base no tipo de dispositivo.
 *
 * Em dispositivos móveis, o menu é renderizado como um botão de alternância (ToggleMenu),
 * enquanto em dispositivos maiores, ele é renderizado como uma barra lateral (Sidebar).
 *
 * @returns {JSX.Element} O componente de menu adaptado ao dispositivo.
 */
export function Menu() {
  // Determina se o dispositivo é móvel, utilizando o hook `useIsMobile`
  const isMobile = useIsMobile()

  // Retorna o componente apropriado baseado no tipo de dispositivo
  return isMobile ? <ToggleMenu /> : <Sidebar />
}
