'use client'
import BackBar from '@/components/BackBar/BackBar'
import * as styles from './page.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
const App = () => {
  const router = useRouter()
  const [isModal, setIsModal] = useState(false)
  const modalHandler = (isOk: boolean) => {
    isOk
      ? setIsModal(false)
      : (() => {
          setIsModal(false)
        })()
  }
  return (
    <>
      <BackBar label='내 계정'/>
      <main className={styles.Main}>
        <button
          className={styles.Button}
          onClick={() => {
            setIsModal(true)
          }}
        >
          로그아웃
        </button>
        <button
          className={styles.Button}
          onClick={() => {
            router.push('/my/account/cancel')
          }}
        >
          회원탈퇴
        </button>
      </main>
      {isModal && (
        <div className={styles.ModalOuterContainer}>
          <div className={styles.ModalInnerContainer}>
            <div className={styles.ModalPContainer}>
              <p className={styles.ModalHead}>로그아웃</p>
              <p className={styles.ModalSub}>로그아웃 하시겠어요?</p>
            </div>

            <div className={styles.ModalButtonBox}>
              <button
                className={styles.ModalButton({ isOk: false })}
                onClick={() => {
                  modalHandler(false)
                }}
              >
                취소
              </button>
              <button
                className={styles.ModalButton({ isOk: true })}
                onClick={() => {
                  modalHandler(true)
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default App
