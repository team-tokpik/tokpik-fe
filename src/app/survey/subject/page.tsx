'use client'
import React, { useEffect, useState } from 'react'
import * as styles from './page.css'
import CheckBox from '@/components/CheckBox/CheckBox'
import Button from '@/components/Button/Button'
import { useRouter } from 'next/navigation'
import { topicTags } from '@/types/survey'
import { getTopic } from '@/api/survey/getTopic'
import { useProfileStore } from '@/store/useProfile'

export default function Subject() {
  const [selectedSubject, setSelectedSubject] = useState<number[]>([])
  const [topicList, setTopicList] = useState<topicTags[]>([])
  const router = useRouter()
  const setTopicTags = useProfileStore((state) => state.actions.setTopicTags)
  const postProfile = useProfileStore((state) => state.actions.postProfile)

  useEffect(() => {
    getTopic().then((res) => {
      setTopicList(res.topicTags)
    })
  }, [])

  const toggleSubject = (label: number) => {
    setSelectedSubject((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    )
  }

  const handleNext = () => {
    setTopicTags(selectedSubject)
    postProfile()
    router.push('/')
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
        {topicList.map((item) => (
          <div
            className={styles.subjectItem}
            key={item.topicTagId}
            onClick={() => toggleSubject(item.topicTagId)}
          >
            <CheckBox
              label={item.content}
              checked={selectedSubject.includes(item.topicTagId)}
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
