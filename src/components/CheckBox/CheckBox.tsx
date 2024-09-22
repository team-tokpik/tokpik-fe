import { CheckBoxType } from '@/types/checkbox'
import React from 'react'
import * as styles from './CheckBox.css'

export default function CheckBox({ label, emoji, checked }: CheckBoxType) {
  return (
    <div className={styles.checkBoxRecipe({ checked })}>
      {emoji && <span className={styles.emoji}>{emoji}</span>}
      <span className={styles.labelRecipe({ checked })}>{label}</span>
    </div>
  )
}
