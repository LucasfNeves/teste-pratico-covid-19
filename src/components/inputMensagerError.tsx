import { CircleX } from 'lucide-react'

interface InputMensagerErrorProps {
  error: string | undefined
}

/**
 * Componente para exibir mensagens de erro em um campo de input.
 *
 * Este componente recebe uma mensagem de erro e a exibe junto com um ícone de "X" vermelho.
 * Ele é utilizado para fornecer feedback visual ao usuário em caso de erro no formulário.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string | undefined} props.error - A mensagem de erro a ser exibida.
 *
 * @returns {JSX.Element} Um elemento JSX que exibe a mensagem de erro com um ícone.
 */
export function InputMensagerError({ error }: InputMensagerErrorProps) {
  return (
    <span className="flex items-center justify-start gap-2 text-xs text-red-400">
      <CircleX className="inline h-4 w-4" />
      <p>{error}</p>
    </span>
  )
}
