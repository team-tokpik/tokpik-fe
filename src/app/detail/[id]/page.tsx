'use client'
import React, { useEffect, useState } from 'react'
import * as styles from './page.css'
import Subtitle from '@/components/Subtitle/Subtitle'
import Scrap_active from '/public/images/Scrap_active.svg'
import Scrap_inactive from '/public/images/Scrap_inactive.svg'
import { vars } from '@/app/globals.css'
import { CardType } from '@/types/card'
import Card from '@/components/Card/Card'
import { getTopicsTopicIdDetails,  DetailItem } from '@/api/detail/getTopicsTopicIdDetails'
import { getTopicsTopicIdRelated, RelatedTopic } from '@/api/detail/getTopicsTopicIdRelated'
import { subject } from '@/constants/subject'
import ScrapModal from '@/components/ScrapModal/ScrapModal'
import { useRouter } from 'next/navigation'
import Toast from '@/components/Toast/Toast'
import Skeleton from '@/components/Skeleton/Skeleton'
export default function DetailPage({params}: {params: {id: string}}) {
  const { id } = params;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  const [showToast, setShowToast] = useState(false);
  const [related, setRelated] = useState<RelatedTopic[]>([])
  const [title, setTitle] = useState<string>('')
  const [type, setType] = useState<CardType['type']>('relation')
  const [scrap, setScrap] = useState<boolean>(false)
  const [detail, setDetail] = useState<DetailItem[]>([])
  const [isScrap, setIsScrap] = useState<boolean>(false)
  const COLOR_MAP: Record<CardType['type'], string> = {
    relation: vars.color.egg,
    issue: vars.color.tomato,
    love: vars.color.sweet,
    business: vars.color.ham,
    hobby: vars.color.cheese,
    humor: vars.color.lettuce,
    'ice-breaker': vars.color.avocado,
    'self-development': vars.color.pimento,
  }

  
  // 디테일 내용 가져오기
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
          // 첫 번째 API 호출
          const detailsResponse = await getTopicsTopicIdDetails(parseInt(id));
          console.log('상세 내용: ', detailsResponse);
          setDetail(detailsResponse.details);
          setScrap(detailsResponse.scraped);
    
          // 첫 번째 API가 끝난 후 두 번째 API 호출
          // 디테일 내용을 보는 것이 우선이므로 디테일 내용을 먼저 가져오고 관련 글을 가져옵니다!
          const relatedResponse = await getTopicsTopicIdRelated(parseInt(id));
          console.log('관련 글: ', relatedResponse.talkTopics);
          setRelated(relatedResponse.talkTopics);
        } catch (error) {
          console.error('API 호출 중 오류 발생:', error);
        } finally {
          setIsLoading(false);
        }
      })();
    }, [id]);
    
  // 쿼리 파라미터 추출
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const titleFromQuery = searchParams.get('title');
    const typeFromQuery = searchParams.get('type') as CardType['type'];
    if (titleFromQuery) setTitle(titleFromQuery);
    if (typeFromQuery) setType(typeFromQuery);
  }, []);


  
  // 스크랩 완료 후 모달창이 닫힐때,
  // 토스트 메시지 출력 , 스크랩 상태 변경
  const handleScrapModalClose = () => {
    setIsScrap(false);
    setScrap(true);
    //1초 동안 토스트 메세지 보여주기
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1000); 
  };

  return (
    <div className={styles.container}>
      {isScrap && <ScrapModal onClickX={() => setIsScrap(false)} onClick={handleScrapModalClose} id={parseInt(id)}/>}
      {showToast && <Toast text='스크랩 완료'/>}
      <div className={styles.titleSection}>
        <div className={styles.subtitleSection}>
          {isLoading ? (
            <Skeleton width='30%' height='1.125rem' radius='full' />
          ) : (
            <>
              <Subtitle type={type} isSmall={false} isCard={false} />
              {scrap ? (
                <Scrap_active 
                  color={COLOR_MAP[type as CardType['type']]}
                />
              ) : (
                <Scrap_inactive 
                  color={COLOR_MAP[type as CardType['type']]} 
                  onClick={() => {
                    setIsScrap(true)
                  }}
                />
              )}
            </>
          )}

          

        </div>
        {isLoading ? (
          <Skeleton width='100%' height='2.125rem' radius='full' />
        ) : (
          <h1 className={styles.title}>{title}</h1>
        )}
      </div>
      {/* 본문 */}
      <div className={styles.contentSection}>
        <p style={{ fontSize: '18px', fontWeight: '500', marginBottom: '4px' }}>
          이 대화를 어떻게 이어나갈 수 있을까요?
        </p>
        {isLoading ? (
          <>
          <Skeleton width='100%' height='1.125rem' radius='full' />
          <Skeleton width='100%' height='1.125rem' radius='full' />
          <Skeleton width='70%' height='1.125rem' radius='full' />
          <Skeleton width='20%' height='1.125rem' radius='full' />
          </>
        ) : (
        <ul className={styles.contentList}>
          {detail.map((item, index) => (
            <li key={index}>
              <p className={styles.contentTitle}>{item.itemTitle} :</p>
              <p className={styles.contentContent}>{item.itemContent}</p>
            </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.relativeCardSection}>
        <p>You may also like</p>
        <div className={styles.relativeCardWrapper}>
        {isLoading ? (
          <>
              <Skeleton width='100%' height='106px' radius='half' />
              <Skeleton width='100%' height='106px' radius='half' />
              </>
            ) : (
              related && related.length > 0 ? (
                related.map((item) => {
                  const matchedSubject = subject.find(s => s.label === item.type);
                  const topicTypeEng = matchedSubject ? matchedSubject.eng : item.type;
                  return (
                    <Card 
                      key={item.topicId} 
                      id={item.topicId}
                      isScraped={item.scraped}
                      size="small" 
                      type={topicTypeEng as CardType['type']} 
                      title={item.title} 
                      isAlarm={false}
                      onClick={() => {
                        router.push(`/detail/${item.topicId}?title=${item.title}&type=${topicTypeEng}`);
                      }} 
                    />
                  );
                })
              ) : (
                <p>관련된 카드가 없습니다.</p>
              )
            )}

        </div>
      </div>
    </div>
  )
}
