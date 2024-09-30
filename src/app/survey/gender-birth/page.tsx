'use client'
import React, { useEffect, useState } from 'react'
import * as styles from './page.css'
import InputField from '@/components/InputField/InputField'
import Button from '@/components/Button/Button'
import CheckBox from '@/components/CheckBox/CheckBox'
import { gender } from '@/constants/gender'
import { formatBirth, isValidBirth } from '@/utils/birth'
import { useRouter } from 'next/navigation'
import { useProfileStore } from '@/store/useProfile'

export default function GenderBirth() {
  const [localBirth, setLocalBirth] = useState('')
  const [selectedGender, setSelectedGender] = useState('')
  const setGender = useProfileStore((state) => state.actions.setGender)
  const setBirth = useProfileStore((state) => state.actions.setBirth)
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()

  const handleNext = () => {
    setGender(selectedGender === '남성')
    setBirth(formatBirth(localBirth))
    router.push('/survey/location')
  }

  useEffect(() => {
    if (isValidBirth(localBirth) && selectedGender) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [localBirth, selectedGender])

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
          value={localBirth}
          onChange={(e) => setLocalBirth(e.target.value)}
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
