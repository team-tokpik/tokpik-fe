'use client'

import React, { useState } from 'react'
import * as styles from './page.css'
import { location } from '@/constants/location'
import CheckBox from '@/components/CheckBox/CheckBox'
import Button from '@/components/Button/Button'
import { useRouter } from 'next/navigation'

export default function Location() {
  const [selectedLocation, setSelectedLocation] = useState<string[]>([])

  const router = useRouter()

  const toggleLocation = (label: string) => {
    setSelectedLocation((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    )
  }

  const handleNext = () => {
    router.push('/survey/subject')
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>
          어떤 장소에서 <br />
          톡픽이 필요한가요?
        </p>
        <p className={styles.subTitle}>주로 생활하는 공간을 모두 알려주세요</p>
      </div>
      <div className={styles.locationBox}>
        {location.map((item) => (
          <div
            className={styles.locationItem}
            key={item.label}
            onClick={() => {
              toggleLocation(item.label)
            }}
          >
            <CheckBox
              key={item.label}
              label={item.label}
              emoji={item.emoji}
              checked={selectedLocation.includes(item.label)}
            />
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          size="large"
          label="다음"
          onClick={handleNext}
          disabled={selectedLocation.length === 0}
          active={selectedLocation.length > 0}
        />
      </div>
    </div>
  )
}
