'use client'
import BackBar from '@/components/BackBar/BackBar'
import * as styles from './page.css'
import FilterCheckButtonOff from '@/../public/images/FilterCheckButtonOff.svg'
import FilterCheckButtonOn from '@/../public/images/FilterCheckButtonOn.svg'
import { useState, useEffect } from 'react'
import { deleteUser } from '@/api/my/deleteUsers'
import { getUserScrapsCount } from '@/api/my/getUserScrapsCount'
import { getUserTalksCount } from '@/api/my/getUserTalksCount'
const App = () => {
  const [isReady, setIsReady] = useState(false)
  const cancelAccount = async () => {
    await deleteUser();
  }
  const [scrapsCount, setScrapsCount] = useState(0);
  const [talksCount, setTalksCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const scrapsCount = await getUserScrapsCount();
        const talksCount = await getUserTalksCount();
        setScrapsCount(scrapsCount);
        setTalksCount(talksCount);
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <BackBar label='회원탈퇴'/>
      <main className={styles.Main}>
        {/* header section*/}
        <div className={styles.HeadContainer}>
          <p>떠나신다니</p>
          <p>아쉬워요!</p>
        </div>
        {/* info section */}
        <div className={styles.InfoContainer}>
          <p className={styles.InfoHead}>
            기록된 사용 정보, 스크랩한 톡픽 등<br />
            소중한 기록이 모두 사라져요
          </p>
          <p className={styles.InfoSub}>
            탈퇴하면 다시 가입하더라도 이전 정보를 되돌릴 수 없어요
          </p>
          <p className={styles.InfoInfo}>
            스크랩 리스트 <span className={styles.orange}>{scrapsCount}개</span> 스크랩한
            톡픽 <span className={styles.orange}>{talksCount}개</span>
          </p>
        </div>
        {/* button section */}
        <div className={styles.ButtonContainer}>
          {/* 회원 탈퇴 유의사항을 확인했습니다. */}
        <div className={styles.FilterContentButton({isReady})} onClick={() => setIsReady(!isReady)}>
            {isReady ? <FilterCheckButtonOn /> : <FilterCheckButtonOff />}
            회원 탈퇴 유의사항을 확인했습니다.
        </div>
          {/* submit button */}
          
          <button
            className={styles.SubmitButton({ isReady })}
            disabled={isReady}
            onClick={cancelAccount}
          >
            회원 탈퇴하고 계정 삭제하기
          </button>
        </div>
      </main>
    </>
  )
}
export default App
