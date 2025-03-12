import Logo from '@/assets/logo.svg'
import { ButtonMenu } from '../ButtonMenu'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'
import { useToggleMenuController } from './useToggleMenuController'
import Link from 'next/link'
import { ButtonNavigate } from '../ButtonNavigate'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Componente ToggleMenu que renderiza um menu deslizante.
 *
 * Este componente é um menu interativo que pode ser aberto ou fechado.
 * Ele utiliza o componente `Collapsible` do ShadCn para gerenciar o estado de visibilidade do menu
 * e permite alternar entre abrir e fechar o menu com um botão.
 *
 * @returns {JSX.Element} O menu deslizante com botões de navegação e logo.
 */

export function ToggleMenu() {
  const { setOpen, open, toggleMenu } = useToggleMenuController() // Controla o estado do menu (aberto ou fechado)

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="items-between fixed left-0 right-0 top-0 z-[99] flex h-13  w-full flex-col justify-center bg-darkBlue-800 p-2"
    >
      <header className="relative flex h-full w-full items-center justify-between">
        {/* Logo da aplicação com link para a página inicial */}
        <Link href="/">
          <figure>
            <Image src={Logo} alt="Logo" height={40} />
          </figure>
        </Link>

        {/* Botão para alternar o estado do menu */}
        <div className="flex items-center justify-end gap-4">
          <ButtonMenu
            title={!open ? 'Abrir Menu' : 'Fechar Menu'}
            open={open}
            setOpen={setOpen}
          />
        </div>
      </header>

      {/* Menu colapsável com animação de slide */}
      <CollapsibleContent
        forceMount
        className={cn(
          'fixed inset-0 flex h-full w-full bg-darkBlue-600/90 backdrop-blur-lg transition-all duration-300 ease-in-out data-[state=closed]:hidden',
          !open ? 'animate-slideOutRight' : 'animate-slideInRightToLeft',
        )}
      >
        {/* Navegação dentro do menu colapsável */}
        <div className="z-45 flex w-full flex-col items-center justify-between gap-4 rounded-md px-8 py-24">
          <nav className="flex w-full flex-col gap-6">
            {/* Botões de navegação, que fecham o menu ao serem clicados */}
            <ButtonNavigate onClick={toggleMenu} to={'/'}>
              Brasil
            </ButtonNavigate>
            <ButtonNavigate onClick={toggleMenu} to={'/countries'}>
              Transações
            </ButtonNavigate>
          </nav>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
