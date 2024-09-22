import React from 'react'
import * as styles from './BackBar.css'
import Back from '/public/images/Back.svg'
export default function BackBar() {
  return (
    <div className={styles.wrapper}>
      <Back />
    </div>
  )
}
