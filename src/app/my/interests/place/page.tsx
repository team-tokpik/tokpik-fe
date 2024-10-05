'use client'
import * as styles from './page.css'
import BackBar from '@/components/BackBar/BackBar'
import InterestButton from '@/components/InterestButton/InterestButton'
import { useInterestListState, useInterestListActions } from '@/store/useInterestList'
import { location } from '@/constants/location'
import { useState, useEffect } from 'react'
import { patchUsersPlaceTags } from '@/api/my/patchUsersPlaceTags'
const App = () => {
    const InterestList = useInterestListState()
    const { findList, pushList, popList } = useInterestListActions()
   
    const [placeList,setPlaceList] = useState<string[]>([])

    //처음 마운트 될대 스토어의 장소들을 가져온다. - 초기 장소 설정
    useEffect(()=>{
        setPlaceList(Array.from(InterestList.placeList))
    },[InterestList.placeList])

    const clickHandler = (item:string) => {
        if (placeList.includes(item)) {
            setPlaceList(placeList.filter((place) => place !== item));
        } else {
            setPlaceList([...placeList, item]);
        }
    }
    const submitHandler = () => {
      console.log('11')
    // 1. placeList의 내용을 스토어에 저장
    placeList.forEach(place => {
      pushList('place', place);
    });

    // 2. api 요청하여 장소 태그 수정

    // 2.1 장소와 ID 매핑
    const placeIdMap: { [key: string]: number } = {
      '집': 1,
      '학교': 2,
      '직장': 3,
      '카페':4,
      '대중교통':5,
    };

    // 2.2 placeList의 내용을 ID로 변환
    const placeTagIds = placeList.map(place => placeIdMap[place]).filter(id => id !== undefined);

    // 2.3 변환된 ID 배열로 API 호출
    patchUsersPlaceTags(placeTagIds)
      .then((response) => {
        console.log('응답 본문:', response.placeTopicTags);
      // 성공적으로 업데이트되었을 때 뒤로 가기
      window.history.back();
      })
      .catch(error => {
          console.error('장소 태그 업데이트 중 오류 발생:', error);
      });
    }
    return (
        <>
            <BackBar isClose={true}/>
            <main className={styles.Main}> 
                {/* 헤더 섹션 */}
                <div className={styles.HeadContainer}>
                    <p>어떤 장소에서</p>
                    <p>톡픽이 필요한가요?</p>
                    <p className={styles.HeadSub}>주로 생활하는 공간을 모두 알려주세요</p>
                </div>
                <div className={styles.InterestContainer}>
                    {location.map((item) => (
                        <InterestButton 
                            key={item.label}
                            size='large' 
                            text={item.label} 
                            isOn={placeList.includes(item.label)} 
                            onClick={() => clickHandler(item.label)}
                        />
                    ))}
                </div>
                
                {/* submit button */}
                
                <button
                    className={styles.SubmitButton}
                    disabled={false}
                    onClick={submitHandler}
                >
                    완료
                </button>
            </main>
        </>
    )
}

export default App
