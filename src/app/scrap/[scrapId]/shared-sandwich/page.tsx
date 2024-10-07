'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import * as styles from './page.css'
import TopingTable from '@/components/TopingTable/TopingTable'
import LZString from 'lz-string'
import Button from '@/components/Button/Button'
type Topic = {
  scrapTopicId: number
  topicId: number
  topicTitle: string
  topicType: string
  scraped: boolean
}

export interface TopicCount {
  topicType: string
  percentage: number
}

export default function SharedSandwich() {
  const searchParams = useSearchParams()
  const compressedData = searchParams.get('d')
  const [topicList, setTopicList] = useState<Topic[]>([])
  const [scrapName, setScrapName] = useState('')
  const [topicCountList, setTopicCountList] = useState<TopicCount[]>([])

  const router = useRouter()
  const handleMakeSandwich = () => {
    router.push('/onboard')
  }

  useEffect(() => {
    if (compressedData) {
      try {
        const decompressedData = JSON.parse(
          LZString.decompressFromEncodedURIComponent(compressedData)
        )
        const expandedTopicList = decompressedData.t.map((minTopic: any) => ({
          topicId: minTopic.id,
          topicType: minTopic.type,
          topicTitle: '', // 이 정보는 없어서 빈 문자열로 설정
          scrapTopicId: 0, // 이 정보도 없어서 0으로 설정
          scraped: true, // 기본값으로 true 설정
        }))
        setTopicList(expandedTopicList)
        setScrapName(decompressedData.n)
      } catch (error) {
        console.error('Error decompressing data:', error)
      }
    }
  }, [compressedData])

  const getTopicTypeList = () => {
    return new Set(topicList.map((topic) => topic.topicType))
  }

  const calculateTopicPercentage = () => {
    const topicTypeList = getTopicTypeList()
    const topicCountList: TopicCount[] = []
    topicTypeList.forEach((topicType) => {
      const topicCount = topicList.filter(
        (topic) => topic.topicType === topicType
      )
      const percentage = (topicCount.length / topicList.length) * 100
      topicCountList.push({ topicType, percentage })
    })
    return topicCountList
  }

  useEffect(() => {
    const topicCountList = calculateTopicPercentage()
    setTopicCountList(topicCountList)
  }, [topicList])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Here&apos;s your sandwich!
          <br />
          Have a nice talk!
        </h1>
        <div id="capture-area" className={styles.captureArea}>
          <div className={styles.imageContainer}>
            <img src="/images/sandwich/bread-top.png" alt="bread-top" />
            {topicList.map((topic) => {
              return renderTopicImage(topic.topicType)
            })}
            <img src="/images/sandwich/bread-bottom.png" alt="bread-bottom" />
          </div>
          <TopingTable
            title={scrapName || ''}
            topicCount={topicList.length}
            topicCountList={topicCountList}
          />
          <div className={styles.fixedContainer}></div>
          <div className={styles.buttonContainer}>
            <Button
              label="나만의 샌드위치 만들러 가기"
              size="large"
              onClick={handleMakeSandwich}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const renderTopicImage = (topicType: string) => {
  const topicImageList = {
    '취미와 여가활동': '/images/sandwich/cheese.png',
    '유머와 웃음': '/images/sandwich/lettuce.png',
    인간관계: '/images/sandwich/egg.png',
    '사랑과 연애': '/images/sandwich/sweet.png',
    자기계발: '/images/sandwich/pimento.png',
    '비즈니스와 업무': '/images/sandwich/ham.png',
    '요즘 핫한 이슈': '/images/sandwich/tomato.png',
    아이스브레이킹: '/images/sandwich/avocado.png',
  }
  return (
    <img
      src={topicImageList[topicType as keyof typeof topicImageList]}
      alt={topicType}
    />
  )
}
