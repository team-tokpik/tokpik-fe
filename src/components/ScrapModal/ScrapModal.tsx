import * as styles from './ScrapModal.css'
import GrayX from '/public/images/GrayX.svg'
import ScrapModalContent from '@/components/ScrapModalContent/ScrapModalContent'
import { getUsersScraps, Scrap } from '@/api/scrap/getUsersScraps'
import { useEffect, useState } from 'react'
import { subject } from '@/constants/subject'
import { postUsersScrap } from '@/api/scrap/postUsersScraps'
import { postUsersScrapsScrapIdTopicsTopicId } from '@/api/scrap/postUsersScrapsScrapIdTopicsTopicId'
interface ScrapModalProps {

  onClick: (isCompleted?: boolean) => void
  onClickX: (e: React.MouseEvent) => void
  id:number
}

const ScrapModal = ({onClick,onClickX,id}: ScrapModalProps) => {

  const [scraps,setScraps] = useState<Scrap[]>([])
  const [isAdding,setIsAdding] = useState<boolean>(false)
  const [isCompleted,setIsCompleted] = useState<boolean>(false)
  useEffect(() => {
    getUsersScraps().then((res) => {
      setScraps(res.scraps)
    })
  }, [])

  const handleEnter = async (title:string) => {
    if (isAdding) {
      const response = await postUsersScrap(title);
      setScraps([ {scrapId: response.scrapId, scrapName: title, recentTopicTypes: []},...scraps])
      setIsAdding(false);
    }
  }

  const handleClickScrap = async (e: React.MouseEvent, scrapId:number,topicId:number) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    await postUsersScrapsScrapIdTopicsTopicId(scrapId,topicId);
    setIsCompleted(prev=>true)
    onClick(isCompleted)
    setIsCompleted(prev=>false)
  }

  return (
    <div className={styles.Background}>
      <div className={styles.OuterContainer}>
        <div className={styles.Header}>
          <p>Where to Save? </p>
          <GrayX color='#fafafa' onClick={onClickX}/>

        </div>
        <div className={styles.Content}>
        <ScrapModalContent title='스크랩 리스트 추가' handleEnter={handleEnter} isAdding={isAdding} onClick={()=>{setIsAdding(prev=>!prev)}} isInput={true} colorSet={Array(4).fill(undefined) as [string | undefined, string | undefined, string | undefined, string | undefined]}/>
        {scraps.map((scrap,index) => (
            <ScrapModalContent 
            onClick={(e: React.MouseEvent)=>{handleClickScrap(e,scrap.scrapId,id)}}
            title={scrap.scrapName}
            key={index}
            isInput={false}            
            colorSet={scrap.recentTopicTypes.slice(0, 4).map((topic) => {
              const matchedSubject = subject.find(s => s.label === topic.topicTypeContent);
              return matchedSubject ? `${matchedSubject.eng}` : undefined;
            }).concat(Array(4).fill(undefined)).slice(0, 4) as [string | undefined, string | undefined, string | undefined, string | undefined]}
       />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrapModal