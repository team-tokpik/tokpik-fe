'use client'
import * as styles from './page.css'
import BackBar from '@/components/BackBar/BackBar'
import InterestButton from '@/components/InterestButton/InterestButton'
import { useInterestListState, useInterestListActions } from '@/store/useInterestList'
import { subject } from '@/constants/subject'
import { useState, useEffect } from 'react'
import { patchUsersTags } from '@/api/my/patchUsersTags'

const App = () => {
    const InterestList = useInterestListState()
    const { findList, pushList, popList } = useInterestListActions()
   
    const [subjectList, setSubjectList] = useState<string[]>([])

    useEffect(() => {
        setSubjectList(Array.from(InterestList.subjectList))
    }, [InterestList.subjectList])

    const clickHandler = (item: string) => {
        if (subjectList.includes(item)) {
            setSubjectList(subjectList.filter((subject) => subject !== item))
        } else {
            setSubjectList([...subjectList, item])
        }
    }

    const submitHandler = () => {
        // 1. subjectList의 내용을 스토어에 저장
        subjectList.forEach(subject => {
            pushList('subject', subject)
        })

        // 2. API 요청하여 주제 태그 수정
        const subjectIdMap: { [key: string]: number } = {
            '사랑과 연애': 1,
            '비즈니스와 업무': 2,
            '아이스브레이킹': 3,
            '유머와 웃음': 4,
            '요즘 핫한 이슈': 5,
            '취미와 여가활동': 6,
            '자기 계발': 7,
            '인간관계': 8,
        }

        const subjectTagIds = subjectList.map(subject => subjectIdMap[subject]).filter(id => id !== undefined)

        patchUsersTags(subjectTagIds)
            .then((response) => {
                console.log('응답 본문:', response.talkTopicTags)
                window.history.back()
            })
            .catch(error => {
                console.error('주제 태그 업데이트 중 오류 발생:', error)
            })
    }

    return (
        <>
            <BackBar isClose={true}/>
            <main className={styles.Main}> 
                <div className={styles.HeadContainer}>
                    <p>어떤 대화 주제를</p>
                    <p>원하시나요?</p>
                    <p className={styles.HeadSub}>
                        원하시는 주제를 모두 선택해주세요
                        <br />
                        나중에 다른 주제로 변경할 수도 있어요
                    </p>
                </div>
                <div className={styles.InterestContainer}>
                    {subject.map((item) => (
                        <InterestButton 
                            key={item.label}
                            size='small' 
                            text={item.label} 
                            isOn={subjectList.includes(item.label)} 
                            onClick={() => clickHandler(item.label)}
                        />
                    ))}
                </div>
                
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
