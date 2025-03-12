import { X } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/cn'

interface ModalProps {
  title?: string
  children: React.ReactNode
  open?: boolean
  onClose: () => void
  className?: string
}

export function Modal({
  title,
  children,
  open,
  onClose,
  className,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        aria-describedby=""
        className={cn(
          'w-[90%] max-w-[400px] z-[99]  space-y-6 overflow-y-auto rounded-md border-none bg-darkBlue-600 p-6 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] lg:w-full max-h-[90vh]',
          className,
        )}
      >
        <header className="flex items-center justify-between">
          <DialogClose className="flex h-12 w-12 items-center justify-center text-white transition-all hover:text-neutral-300 hover:duration-300">
            <X className="h-6 w-6" />
          </DialogClose>
          <DialogTitle className="text-md w-full flex-1 text-center text-white">
            {title}
          </DialogTitle>

          <div className="w-12 h-12" />
        </header>

        <main>{children}</main>
      </DialogContent>
    </Dialog>
  )
}
