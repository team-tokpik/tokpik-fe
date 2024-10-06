import React from 'react'
import * as styles from './BackBar.css'
import Back from '/public/images/Back.svg'
import Close from '/public/images/Close.svg'
type BackBarProps = {
  isClose?: boolean
  label?: string
}

export default function BackBar({ isClose = false, label }: BackBarProps) {
  const clickHandler = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
  return (
    <div className={styles.wrapper}>
      <div style={{ visibility: !isClose ? 'visible' : 'hidden' }}><Back onClick={clickHandler} /></div>
      <p style={{ visibility: label ? 'visible' : 'hidden' }}>{label || ''}</p>
      <div style={{ visibility: isClose ? 'visible' : 'hidden' }}><Close onClick={clickHandler} /></div>
    </div>
  )
}
