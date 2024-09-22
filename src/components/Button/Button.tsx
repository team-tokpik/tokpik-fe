import React from 'react'
import * as styles from './Button.css'
import { ButtonType } from '@/types/button'

export default function Button({
  size,
  label,
  active,
  onClick,
  disabled,
}: ButtonType) {
  return (
    <button
      className={styles.buttonRecipe({ size, active })}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
