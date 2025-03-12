import { useState } from 'react'

/**
 * Hook personalizado para controlar o estado de abertura e fechamento do menu.
 *
 * Este hook gerencia o estado de visibilidade de um menu, permitindo alternar
 * entre os estados aberto e fechado. Ele retorna as funções necessárias para
 * manipular esse estado, como `toggleMenu` para alternar e `setOpen` para definir diretamente.
 *
 * @returns {object} Objeto com o estado do menu e as funções para controlar seu comportamento.
 * @returns {boolean} open - O estado atual do menu (verdadeiro se aberto, falso se fechado).
 * @returns {Function} toggleMenu - Função para alternar entre os estados de aberto e fechado.
 * @returns {Function} setOpen - Função para definir explicitamente o estado do menu (aberto ou fechado).
 */
export function useToggleMenuController() {
  const [open, setOpen] = useState(false) // Estado que controla se o menu está aberto ou fechado

  /**
   * Função para alternar entre os estados de aberto e fechado do menu.
   * Quando chamada, inverte o estado atual do menu.
   */
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen) // Alterna o estado entre verdadeiro e falso
  }

  // Retorna o estado atual, a função para alternar o menu e a função para setar o estado
  return {
    open,
    toggleMenu,
    setOpen,
  }
}
