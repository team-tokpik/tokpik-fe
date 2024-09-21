import React from 'react'
import * as styles from './Button.css'
import { ButtonType } from '@/types/button'

export default function Button({ size, label, active }: ButtonType) {
  return (
    <button className={styles.buttonRecipe({ size, active })}>{label}</button>
  )
}
