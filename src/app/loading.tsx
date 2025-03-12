import { Spinner } from '@/components/Spinner'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-darkBlue-900">
      <Spinner />
    </div>
  )
}
