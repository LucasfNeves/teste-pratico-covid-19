'use client'

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
  // Retorna o componente apropriado baseado no tipo de dispositivo
  return (
    <div className="bg-red-500">
      {/* Exibe ToggleMenu em telas menores */}
      <div className="lg:hidden">
        <ToggleMenu />
      </div>

      {/* Exibe Sidebar em telas maiores */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
    </div>
  )
}
