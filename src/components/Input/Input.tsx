import type { InputHTMLAttributes, ReactNode } from 'react'
import styles from './Input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  action?: ReactNode
}

export default function Input({ id, label, action, ...props }: InputProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />

      {action && <div className={styles.action}>{action}</div>}
    </div>
  )
}
