import Image from 'next/image'
import emptyState from '@/assets/emptyState.svg'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen w-screen inset-0 absolute bg-darkBlue-900 p-6 z-[99]">
      <main className="flex flex-col items-center justify-center gap-4 min-h-screen ">
        <figure>
          <Image
            src={emptyState}
            alt="404 - Page Not Found"
            height={300}
            priority
            className="object-contain"
          />
        </figure>

        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-zinc-200 text-lg text-center">
            Página não encontrada
          </p>
          <Link href="/">
            <p className="text-zinc-200 text-lg text-center border-b border-zinc-200 pb-1 hover:opacity-70 cursor-pointer transition-all hover:duration-300">
              Voltar para a página inicial
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}
