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
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  return (
    <div className={styles.wrapper}>
      <Back onClick={handleBack} />
      {label && <p>{label}</p>}
      {isClose && <Close />}
    </div>
  )
}
