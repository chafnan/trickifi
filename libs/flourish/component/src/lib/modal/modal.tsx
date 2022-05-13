export interface ModalProps {
  icon: string
  actionText: string
  action: () => void
  cancel: () => void
}

export function Modal(props: ModalProps) {
  const { action, actionText } = props
  return (
    <div className='border-8 border-presto p-32'>
      <div>title</div>
      <div>subtitle</div>

      <div className='flex'>
        <button onClick={action}>{actionText}</button>
        <button />
      </div>
    </div>
  )
}

export default Modal
