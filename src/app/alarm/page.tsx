'use client'
import React, { useState } from 'react'
import * as styles from './page.css'
import BackBar from '@/components/BackBar/BackBar'
import NormalInputField from '@/components/NormalInputField/NormalInputField'
import { vars } from '../globals.css'

export default function Alarm() {
  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [term, setTerm] = useState('')
  const [focusedInput, setFocusedInput] = useState('')

  const handleInputFocus = (input: string) => {
    setFocusedInput(input)
  }

  const handleInputBlur = () => {
    setFocusedInput('')
  }

  const getLabelStyle = (input: string) => {
    return {
      color: focusedInput === input ? vars.color.white : vars.color.gray2,
    }
  }

  return (
    <div className={styles.container}>
      <BackBar isClose={true} label="알림설정" />
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <NormalInputField
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            onFocus={() => handleInputFocus('date')}
            onBlur={handleInputBlur}
          />
          <p style={getLabelStyle('date')}>에</p>
        </div>

        <div className={styles.timeWrapper}>
          <div className={styles.inputWrapper}>
            <NormalInputField
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              onFocus={() => handleInputFocus('startTime')}
              onBlur={handleInputBlur}
            />
            <p style={getLabelStyle('startTime')}>부터</p>
          </div>

          <div className={styles.inputWrapper}>
            <NormalInputField
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              onFocus={() => handleInputFocus('endTime')}
              onBlur={handleInputBlur}
            />
            <p style={getLabelStyle('endTime')}>까지</p>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <NormalInputField
            type="number"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onFocus={() => handleInputFocus('term')}
            onBlur={handleInputBlur}
          />
          <p style={getLabelStyle('term')}>분 간격으로 보내줄게요!</p>
        </div>
      </div>
    </div>
  )
}
