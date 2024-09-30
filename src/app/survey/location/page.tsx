'use client'

import React, { useEffect, useState } from 'react'
import * as styles from './page.css'
import { EMOJI_MAP } from '@/constants/location'
import CheckBox from '@/components/CheckBox/CheckBox'
import Button from '@/components/Button/Button'
import { useRouter } from 'next/navigation'
import { placeTags } from '@/types/survey'
import { getPlace } from '@/api/survey/getPlace'
import { useProfileStore } from '@/store/useProfile'

export default function Location() {
  const [selectedLocation, setSelectedLocation] = useState<number[]>([])
  const [placeList, setPlaceList] = useState<placeTags[]>([])
  const setPlaceTags = useProfileStore((state) => state.actions.setPlaceTags)
  const router = useRouter()

  useEffect(() => {
    getPlace().then((res) => {
      setPlaceList(res.placeTags)
    })
  }, [])

  const toggleLocation = (placeTagId: number) => {
    setSelectedLocation((prev) =>
      prev.includes(placeTagId)
        ? prev.filter((item) => item !== placeTagId)
        : [...prev, placeTagId]
    )
  }

  const handleNext = () => {
    setPlaceTags(selectedLocation.map((placeTagId) => placeTagId))

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
        {placeList.map((item) => (
          <div
            className={styles.locationItem}
            key={item.placeTagId}
            onClick={() => toggleLocation(item.placeTagId)}
          >
            <CheckBox
              label={item.content}
              emoji={EMOJI_MAP[item.content]}
              checked={selectedLocation.includes(item.placeTagId)}
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
