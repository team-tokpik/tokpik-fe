'use client'
import BackBar from '@/components/BackBar/BackBar'
import * as styles from './page.css'
import Button from '@/components/Button/Button'
import FilterContentButton from '@/components/FilterContentButton/FilterContentButton'
const App = () => {
  return (
    <>
      <BackBar />
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
            스크랩 리스트 <span className={styles.orange}>12개</span> 스크랩한
            톡픽 <span className={styles.orange}>48개</span>
          </p>
        </div>
        {/* button section */}
        <div className={styles.ButtonContainer}>
          <FilterContentButton
            size={100}
            content="회원 탈퇴 유의사항을 확인했습니다"
          />
          <Button
            size="large"
            label="회원 탈퇴하고 계정 삭제하기"
            active={false}
            onClick={() => {}}
            disabled={false}
          />
        </div>
      </main>
    </>
  )
}
export default App
