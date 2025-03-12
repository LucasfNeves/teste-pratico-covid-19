'use client'

import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

interface ButtonMenuProps {
  title: string
  open: boolean
  setOpen: (open: boolean) => void
}

/**
 * Componente `ButtonMenu`
 *
 * Um botão interativo que alterna entre dois ícones (`Menu` e `X`) dependendo do estado do menu.
 * Ao clicar no botão, o estado do menu é alternado entre aberto e fechado.
 *
 * @param {ButtonMenuProps} props - Propriedades para configurar o botão de menu
 * @returns {JSX.Element} O botão renderizado com o ícone correspondente ao estado
 */
export function ButtonMenu({
  title,
  open,
  setOpen,
  ...props
}: ButtonMenuProps) {
  // Função que alterna o estado do menu (aberto ou fechado)
  const toggleMenu = () => setOpen(!open)

  return (
    <button
      className={cn('z-50', open ? 'absolute right-2' : 'relative')}
      title={title}
      onClick={toggleMenu}
      {...props}
    >
      {!open ? (
        <Menu className="h-8 text-white" />
      ) : (
        <X className="h-10 text-neutral-200" />
      )}
    </button>
  )
}
