'use client'
import React, { useEffect, useState } from 'react'
import * as styles from './page.css'
import InputField from '@/components/InputField/InputField'
import Button from '@/components/Button/Button'
import CheckBox from '@/components/CheckBox/CheckBox'
import { gender } from '@/constants/gender'
import { isValidBirth } from '@/utils/birth'
import { useRouter } from 'next/navigation'

export default function GenderBirth() {
  const [birth, setBirth] = useState('')
  const [selectedGender, setSelectedGender] = useState('')
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()

  const handleNext = () => {
    router.push('/survey/place')
  }

  useEffect(() => {
    if (isValidBirth(birth) && selectedGender) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [birth, selectedGender])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        생년월일과 <br /> 성별을 입력해주세요
      </h1>
      <div className={styles.inputWrapper}>
        <InputField
          label="생년월일"
          placeholder="생년월일 8자리 (YYYYMMDD)"
          type="text"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
      </div>
      <div className={styles.checkBoxWrapper}>
        <label className={styles.label}>성별</label>
        <div className={styles.genderWrapper}>
          {gender.map((item) => (
            <div
              className={styles.genderBox}
              key={item.label}
              onClick={() => setSelectedGender(item.label)}
            >
              <CheckBox
                key={item.label}
                label={item.label}
                emoji={item.emoji}
                checked={selectedGender === item.label}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          size="large"
          label="다음"
          active={isActive}
          onClick={handleNext}
          disabled={!isActive}
        />
      </div>
    </div>
  )
}
