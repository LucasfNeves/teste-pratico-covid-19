import { DashboardProvider } from '@/context/DashboardContext'
import { DashboardMain } from './components/DashboardMain'

/**
 * Componente principal que envolve o dashboard com o provedor de contexto.
 * O DashboardProvider torna os dados do contexto acessíveis para todos os componentes
 * filhos do DashboardMain, como o filtro de estados, a tabela de dados e o seletor de relatórios.
 *
 * @returns {JSX.Element} O dashboard completo com o contexto global acessível.
 */
export default function Dashboard() {
  return (
    // O DashboardProvider fornece o contexto para todos os componentes filhos
    <DashboardProvider>
      {/* Componente que exibe o conteúdo principal do dashboard */}
      <DashboardMain />
    </DashboardProvider>
  )
}
