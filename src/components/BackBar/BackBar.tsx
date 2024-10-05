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
      <div style={{ visibility: !isClose ? 'visible' : 'hidden' }}><Back /></div>
      <p style={{ visibility: label ? 'visible' : 'hidden' }}>{label || ''}</p>
      <div style={{ visibility: isClose ? 'visible' : 'hidden' }}><Close /></div>
    </div>
  )
}
