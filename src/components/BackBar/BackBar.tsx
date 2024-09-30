import React from 'react'
import * as styles from './BackBar.css'
import Back from '/public/images/Back.svg'
import Close from '/public/images/Close.svg'
type BackBarProps = {
  isClose?: boolean
  label?: string
}

export default function BackBar({ isClose = false, label }: BackBarProps) {
  return (
    <div className={styles.wrapper}>
      <Back />
      {label && <p>{label}</p>}
      {isClose && <Close />}
    </div>
  )
}
