'use client'

import { cn } from '@/lib/cn' // Importa a função para combinar classes dinamicamente
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ButtonNavigateProps {
  children: React.ReactNode
  to: string
  className?: string
  onClick?: () => void
}

/**
 * Componente ButtonNavigate que cria um botão de navegação.
 *
 * Este componente renderiza um botão de navegação com estilos dinâmicos
 * baseados no estado ativo ou inativo da página atual.
 *
 * O botão recebe diferentes estilos dependendo de sua relação com o caminho
 * atual da URL, indicando se o destino é a página ativa ou não.
 *
 * @param {ButtonNavigateProps} props - Propriedades para configurar o botão de navegação.
 * @returns {JSX.Element} O botão de navegação renderizado com estilos dinâmicos.
 */
export function ButtonNavigate({
  children,
  to,
  className,
  onClick,
  ...props
}: ButtonNavigateProps) {
  const pathname = usePathname() // Obtém o caminho atual da URL
  const isActive = pathname === to // Verifica se o caminho atual corresponde ao destino do botão

  return (
    <Link
      onClick={onClick} // Chama a função onClick, caso fornecida
      href={to} // Define o destino de navegação do botão
      className={cn(
        'flex w-full items-center gap-2 rounded-md transition-colors duration-300 text-1xl p-2',
        isActive
          ? ' bg-primaryBlue-500 text-white transition-all hover:bg-primaryBlue-600 hover:duration-300'
          : ' text-neutral-300 transition-all hover:bg-darkBlue-600 hover:duration-300',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
