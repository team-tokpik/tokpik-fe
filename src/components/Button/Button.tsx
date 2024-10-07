import React from 'react'
import * as styles from './Button.css'
import { ButtonType } from '@/types/button'

export default function Button({
  size,
  label,
  active,
  onClick,
  disabled,
  color = 'primary',
}: ButtonType) {
  return (
    <button
      className={styles.buttonRecipe({ size, active, color })}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
