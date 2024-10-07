'use client'
import BackBar from '@/components/BackBar/BackBar'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import * as styles from './page.css'
import TopingTable from '@/components/TopingTable/TopingTable'
import Button from '@/components/Button/Button'
import html2canvas from 'html2canvas'
import Script from 'next/script'
import LZString from 'lz-string'
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

declare global {
  interface Window {
    Kakao: any
  }
}

export default function ExportPage() {
  const searchParams = useSearchParams()
  const scrapTopics = searchParams.get('scrapTopics')
  const scrapName = searchParams.get('scrapName')
  const params = useParams()
  const { scrapId } = params
  const [topicList, setTopicList] = useState<Topic[]>([])
  const [topicCountList, setTopicCountList] = useState<TopicCount[]>([])
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null)

  const compressedData = (data: any): string => {
    return LZString.compressToEncodedURIComponent(JSON.stringify(data))
  }

  const minimizeTopicList = (topicList: Topic[]) => {
    return topicList.map((topic) => {
      return {
        id: topic.topicId,
        type: topic.topicType,
      }
    })
  }

  useEffect(() => {
    try {
      setTopicList(JSON.parse(decodeURIComponent(scrapTopics || '')))
    } catch (error) {
      console.error('Error parsing scrapTopics:', error)
      setTopicList([])
    }
  }, [scrapTopics])

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

  const generateImage = async () => {
    try {
      const element = document.getElementById('capture-area')
      if (!element) return

      const images = element.getElementsByTagName('img')
      for (let i = 0; i < images.length; i++) {
        await new Promise((resolve) => {
          if (images[i].complete) {
            resolve(null)
          } else {
            images[i].onload = () => resolve(null)
            images[i].onerror = () => resolve(null)
          }
        })
      }

      const padding = 20

      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        height: element.offsetHeight + padding * 2,
        width: element.offsetWidth,
        y: -padding,
      })

      const paddedCanvas = document.createElement('canvas')
      paddedCanvas.width = canvas.width
      paddedCanvas.height = canvas.height + padding * 2
      const ctx = paddedCanvas.getContext('2d')
      if (ctx) {
        ctx.fillStyle = '#212121'
        ctx.fillRect(0, 0, paddedCanvas.width, paddedCanvas.height)
        ctx.drawImage(canvas, 0, padding)
      }

      const dataUrl = paddedCanvas.toDataURL('image/jpeg')
      setImageDataUrl(dataUrl)
    } catch (error) {
      console.error('이미지 생성 중 오류 발생:', error)
    }
  }

  useEffect(() => {
    if (topicList.length > 0) {
      generateImage()
    }
  }, [topicList])

  const handleSaveImage = () => {
    if (!imageDataUrl) {
      alert('이미지 생성 중입니다. 잠시 후 다시 시도해주세요.')
      return
    }

    if ('saveImageToPhotos' in navigator) {
      // @ts-expect-error 브라우저 API가 TypeScript 정의에 없음
      navigator
        .saveImageToPhotos(imageDataUrl)
        .then(() => alert('이미지가 사진첩에 저장되었습니다.'))
        .catch(() => alert('이미지 저장에 실패했습니다.'))
    } else {
      const link = document.createElement('a')
      link.href = imageDataUrl
      link.download = `${scrapName || 'sandwich'}.jpeg`
      link.click()
    }
  }

  const handleShareKakao = () => {
    console.log('imageDataUrl', imageDataUrl)
    if (!imageDataUrl) {
      alert('이미지 생성 중입니다. 잠시 후 다시 시도해주세요.')
      return
    }

    if (window.Kakao) {
      const sharedUrl = new URL(
        `/scrap/${scrapId}/shared-sandwich`,
        window.location.origin
      )

      const minTopicList = minimizeTopicList(topicList)
      const compressedPath = compressedData({
        t: minTopicList,
        n: scrapName,
      })
      sharedUrl.searchParams.set('d', compressedPath)
      const path = sharedUrl.pathname + sharedUrl.search

      window.Kakao.Share.sendCustom({
        templateId: 112864,
        templateArgs: {
          PATH: path,
        },
      })
    } else {
      alert('카카오톡 SDK를 불러오는 데 실패했습니다.')
    }
  }

  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
        crossOrigin="anonymous"
        onLoad={() => {
          window.Kakao.init('18fa2954c9cf3d13be3c440a9887fd62')
        }}
      />
      <BackBar />
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
              {topicList.map((topic, index) => {
                return renderTopicImage(topic.topicType, index.toString())
              })}
              <img src="/images/sandwich/bread-bottom.png" alt="bread-bottom" />
            </div>
            <TopingTable
              title={scrapName || ''}
              topicCount={topicList.length}
              topicCountList={topicCountList}
            />
          </div>
          <div className={styles.fixedContainer}></div>
          <div className={styles.buttonContainer}>
            <Button
              label="이미지 저장하기"
              size="large"
              onClick={handleSaveImage}
            />
            <Button
              label="카카오톡 공유하기"
              size="large"
              color="secondary"
              onClick={handleShareKakao}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const renderTopicImage = (topicType: string, key: string) => {
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
      key={key}
    />
  )
}
