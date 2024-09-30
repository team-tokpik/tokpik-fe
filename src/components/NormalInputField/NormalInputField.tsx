import React, { useState } from 'react'
import * as styles from './NormalInputField.css'
type NormalInputFieldProps = {
  value: string
  type?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: () => void
  onBlur?: () => void
  style?: React.CSSProperties
  displayValue?: string
}

export default function NormalInputField({
  value,
  type,
  onChange,
  onFocus,
  onBlur,
  style,
  displayValue,
}: NormalInputFieldProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
    if (onFocus) onFocus()
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (onBlur) onBlur()
  }

  const renderInput = (inputType: string) => {
    const inputValue = inputType === 'date' ? displayValue || '' : value
    const hasValue = inputValue.trim() !== ''

    return (
      <div className={styles.container}>
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder=""
          className={styles.nativeInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={style}
        />
        <div
          className={`${styles.customInput} 
                      ${isFocused ? styles.focused : hasValue ? styles.hasValue : styles.empty}`}
        >
          {inputValue}
        </div>
      </div>
    )
  }

  if (type === 'time') {
    return renderInput('time')
  } else if (type === 'date') {
    return renderInput('date')
  } else {
    return renderInput(type || 'text')
  }
}
