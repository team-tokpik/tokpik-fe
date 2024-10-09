'use client'
import React, { Suspense } from 'react'
import Slider from 'react-slick'
import * as styles from './page.css'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Button from '@/components/Button/Button'
import InstallPrompt from '@/components/InstallPrompt/InstallPrompt'
import { useAlert } from '@/hooks/useAlert'
import { useRouter } from 'next/navigation'

type CustomSlideProps = {
  image: string
  title: string
  subTitle: string
  alt: string
}

function CustomSlide({ image, alt, title, subTitle }: CustomSlideProps) {
  return (
    <div className={styles.carouselSection}>
      <Image
        src={image}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '70%', height: '100%' }}
      />

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subTitle}>{subTitle}</p>
    </div>
  )
}

export default function OnboardPage() {
  // useAlert()
  const router = useRouter()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesTosScroll: 1,
    arrows: false,
    swipeToSlide: true,
  }
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Slider {...settings}>
            <CustomSlide
              image="/images/onboard-1.png"
              alt="onboard1"
              title="좋아하는 톡픽을 탐색하세요"
              subTitle="좋아하는 톡픽을 탐색하세요"
            />
            <CustomSlide
              image="/images/onboard-2.png"
              alt="onboard2"
              title="필터 설정으로 내게 딱 맞는 톡픽을 추천받아요"
              subTitle="대화 주제 고민 없이, 상황에 적합하게!"
            />
            <CustomSlide
              image="/images/onboard-3.png"
              alt="onboard3"
              title="다시 보고싶은 톡픽을 스크랩하세요"
              subTitle="토핑을 스크랩하면 톡픽만의 샌드위치를 드려요!"
            />
            <CustomSlide
              image="/images/onboard-4.png"
              alt="onboard4"
              title="원하는 시간과 순서로 톡픽을 알려줄게요!"
              subTitle="걱정했던 그 대화자리, 톡픽과 함께 준비하세요"
            />
          </Slider>
          <div className={styles.loginWrapper}>
            <div className={styles.buttonWrapper}>
              {/* <Button
              size="large"
              label="Kakao로 시작하기"
              active={true}
              onClick={() => {
                window.location.href =
                  'https://kauth.kakao.com/oauth/authorize?client_id=16e98ca20ea01f100d108a0814854c35&redirect_uri=http://localhost:3000/kakao/callback&response_type=code&scope=account_email,profile_image,openid'
              }}
            /> */}
              <Button
                size="large"
                label="Kakao로 시작하기"
                active={true}
                onClick={() => {
                  router.push('/survey/gender-birth')
                }}
              />
            </div>
            <p className={styles.withNoLogin} onClick={() => router.push('/')}>
              가입 없이 써볼래요
            </p>
          </div>
        </div>
        <InstallPrompt />
      </div>
    </Suspense>
  )
}
