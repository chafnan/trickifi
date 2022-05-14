import { CoreIcon } from '@flourish/icon'
import { ReactComponentElement, ReactNode } from 'react'

export interface ModalProps {
  icon?: ReactNode
  title: string
  subtitle: string
  actionText: string
  onAction: () => void
  cancelText: string
  onCancel: () => void
}

export function Modal(props: ModalProps) {
  const { icon, onAction, onCancel, actionText, cancelText, title, subtitle } =
    props
  return (
    <div className='relative'>
      {icon && (
        <div className='flex justify-center items-center rounded-xl w-112 aspect-square border-8 border-presto'>
          {icon}
        </div>
      )}
      <div className='flex justify-center items-center flex-col border-8 border-presto pt-80 pb-32 px-32 rounded-xl'>
        <div className='text-smoke-100 pb-16'>{title}</div>
        <div className='pb-24 text-smoke-48'>{subtitle}</div>

        <div className='flex gap-4 w-full'>
          <button
            className='w-1/2 py-16 text-white bg-smoke-8 rounded-l rounded-r-sm'
            onClick={onCancel}
          >
            {cancelText}
          </button>
          <button
            className='w-1/2 py-16 text-white bg-presto rounded-l-sm rounded-r'
            onClick={onAction}
          >
            {actionText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
