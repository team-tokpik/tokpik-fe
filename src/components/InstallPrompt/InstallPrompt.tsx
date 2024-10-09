'use client'

import React, { useEffect, useState } from 'react'
import * as styles from './InstallPrompt.css'
import Close from '/public/images/Close.svg'
import Image from 'next/image'
import Share from '/public/images/share_ios.svg'
import { vars } from '@/app/globals.css'
import Button from '../Button/Button'
export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    )
    setIsAndroid(
      /Android/.test(navigator.userAgent) &&
        !/Chrome/.test(navigator.userAgent) &&
        !/CriOS/.test(navigator.userAgent)
    )
    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )
    }
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setDeferredPrompt(null)
      }
    }
  }

  if (isStandalone || !showBanner) {
    return null
  }

  return (
    <div className={styles.modalBanner}>
      <div className={styles.modalContainer}>
        <div className={styles.modalTitleContainer}>
          <h1 className={styles.modalTitle}>톡픽을 설치할 수 있어요</h1>
          <div
            style={{ color: vars.color.white }}
            onClick={() => setShowBanner(false)}
          >
            <Close />
          </div>
        </div>
        {isIOS && (
          <div className={styles.IOSdescriptionContainer}>
            <Image
              src="/images/app_logo.png"
              alt="app_logo"
              width={62}
              height={62}
            />
            <div>
              <p className={styles.modalDescription}>
                하단의 <Share /> 를 누른 후,
                <br />
                <span className={styles.emphasis}>홈 화면에 추가</span>를 누르면
                <br />더 빠르고 가깝게 사용할 수 있어요
              </p>
            </div>
          </div>
        )}
        {isAndroid && (
          <div className={styles.AndroiddescriptionContainer}>
            <Image
              src="/images/app_logo.png"
              alt="app_logo"
              width={49}
              height={49}
            />
            <p className={styles.modalDescription}>
              톡픽을 홈 화면에 추가하면
              <br />더 빠르고 가깝게 사용할 수 있어요
            </p>
            <div className={styles.buttonWrapper}>
              <Button onClick={handleInstall} label="설치" size="large" />
            </div>
          </div>
        )}
        {!isIOS && !isAndroid && deferredPrompt && (
          <>
            <div className={styles.AndroiddescriptionContainer}>
              <Image
                src="/images/app_logo.png"
                alt="app_logo"
                width={62}
                height={62}
              />
              <p className={styles.modalDescription}>
                톡픽을 설치하면 더 빠르고 편리하게 사용할 수 있어요
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <Button onClick={handleInstall} label="설치" size="large" />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
