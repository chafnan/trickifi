import { ReactNode } from 'react'

export interface ButtonProps {
  className?: string
  children?: ReactNode
}

export function Button({ children, className = '' }: ButtonProps) {
  return <button className={`${className}`}>{children}</button>
}

export default Button
