import React from 'react'
import { InputFieldType } from '@/types/inputfield'
import * as styles from './InputField.css'
export default function InputField({
  label,
  placeholder,
  type,
  value,
  onChange,
}: InputFieldType) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
