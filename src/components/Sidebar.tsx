import Logo from '@/assets/logo.svg'
import { LayoutDashboard, Table } from 'lucide-react'
import Image from 'next/image'
import { ButtonNavigate } from './ButtonNavigate'

/**
 * Componente Sidebar que renderiza uma barra lateral de navegação.
 *
 * A barra lateral inclui um logo e um menu com opções de navegação para o painel principal e a página de países.
 * Os itens de navegação são renderizados com ícones e são interativos para navegação entre páginas.
 *
 * @returns {JSX.Element} A sidebar com o logo e os itens de navegação.
 */
export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-full w-[13rem] flex-col items-center justify-start bg-darkBlue-700 p-6">
      <Image src={Logo} alt="Logo" height={40} />

      <div className="flex h-full flex-col justify-between w-full">
        <div className="mt-8 flex w-full flex-col gap-4">
          <h2 className="text-1xl text-white">Menu</h2>

          <nav className="flex w-full flex-col gap-4">
            <ButtonNavigate to="/">
              <LayoutDashboard className="h-4" />
              Brasil
            </ButtonNavigate>

            <ButtonNavigate to="/countries">
              <Table className="h-4" />
              <span>Países</span>
            </ButtonNavigate>
          </nav>
        </div>
      </div>
    </aside>
  )
}
