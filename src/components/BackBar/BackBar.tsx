'use client'
import React from 'react'
import * as styles from './BackBar.css'
import Back from '/public/images/Back.svg'
import Close from '/public/images/Close.svg'
import { useRouter } from 'next/navigation'
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
      <div style={{ visibility: !isClose ? 'visible' : 'hidden' }} onClick={clickHandler} ><Back /></div>
      <p style={{ visibility: label ? 'visible' : 'hidden' }}>{label || ''}</p>
      <div style={{ visibility: isClose ? 'visible' : 'hidden' }} onClick={clickHandler} ><Close /></div>
    </div>
  )
}
