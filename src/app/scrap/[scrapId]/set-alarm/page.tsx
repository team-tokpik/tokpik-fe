'use client'
import React, { useEffect, useState } from 'react'
import * as styles from './page.css'
import BackBar from '@/components/BackBar/BackBar'
import NormalInputField from '@/components/NormalInputField/NormalInputField'
import { vars } from '../../../globals.css'
import Button from '@/components/Button/Button'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { postAlarm } from '@/api/scrap/postAlarm'

export default function SetAlarmPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { scrapId } = useParams()
  const notificationTalkTopicIds = searchParams.get('alarmArr')
  const notificationName = searchParams.get('scrapName')
  const [date, setDate] = useState('')
  const [displayDate, setDisplayDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [term, setTerm] = useState('')
  const [focusedInput, setFocusedInput] = useState('')
  const [isActive, setIsActive] = useState(false)

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value
    setDate(newDate)
    if (newDate) {
      const date = new Date(newDate)
      const formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일`
      setDisplayDate(formattedDate)
    } else {
      setDisplayDate('')
    }
  }

  useEffect(() => {
    if (date && startTime && endTime && term) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [date, startTime, endTime, term])

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

  const handleSubmit = async () => {
    const response = await postAlarm({
      notificationName: notificationName || '',
      notificationTalkTopicIds: notificationTalkTopicIds
        ? notificationTalkTopicIds.split(',').map(Number)
        : [],
      scrapId: Number(scrapId),
      noticeDate: date,
      notificationStartTime: startTime,
      notificationEndTime: endTime,
      notificationIntervalMinutes: Number(term),
    })
    console.log(response)
    router.push(`/scrap`)
  }

  return (
    <div className={styles.container}>
      <BackBar isClose={true} label="알림설정" />
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <NormalInputField
            type="date"
            value={date}
            onChange={handleDateChange}
            onFocus={() => handleInputFocus('date')}
            onBlur={handleInputBlur}
            displayValue={displayDate}
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
        <div className={styles.buttonWrapper}>
          <Button
            size="large"
            label="완료"
            onClick={handleSubmit}
            active={isActive}
            disabled={!isActive}
          />
        </div>
      </div>
    </div>
  )
}
