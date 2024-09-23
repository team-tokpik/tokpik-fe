'use client'
import React, { useState } from 'react'
import * as styles from './page.css'
import { subject } from '@/constants/subject'
import CheckBox from '@/components/CheckBox/CheckBox'
import Button from '@/components/Button/Button'
import { useRouter } from 'next/navigation'

export default function Subject() {
  const [selectedSubject, setSelectedSubject] = useState<string[]>([])
  const router = useRouter()

  const toggleSubject = (label: string) => {
    setSelectedSubject((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    )
  }

  const handleNext = () => {
    router.push('/survey/location')
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>
          어떤 대화 주제를
          <br />
          원하시나요?
        </p>
        <p className={styles.subTitle}>
          원하시는 주제를 모두 선택해주세요
          <br />
          나중에 다른 주제로 변경할 수도 있어요
        </p>
      </div>
      <div className={styles.subjectBox}>
        {subject.map((item) => (
          <div
            className={styles.subjectItem}
            key={item.label}
            onClick={() => toggleSubject(item.label)}
          >
            <CheckBox
              key={item.label}
              label={item.label}
              checked={selectedSubject.includes(item.label)}
            />
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          size="large"
          label="다음"
          onClick={handleNext}
          disabled={selectedSubject.length === 0}
          active={selectedSubject.length > 0}
        />
      </div>
    </div>
  )
}
