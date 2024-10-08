import React, { useEffect, useState } from 'react'
import Avocado from '/public/images/card-images/avocado.svg'
import Egg from '/public/images/card-images/egg.svg'
import Ham from '/public/images/card-images/ham.svg'
import Cheese from '/public/images/card-images/cheese.svg'
import Lettuce from '/public/images/card-images/lettuce.svg'
import Pimento from '/public/images/card-images/pimento.svg'
import Tomato from '/public/images/card-images/tomato.svg'
import Sweet from '/public/images/card-images/sweet.svg'
import * as styles from './Card.css'
import { CardType } from '@/types/card'
import { RecipeVariants } from '@vanilla-extract/recipes'
import Subtitle from '../Subtitle/Subtitle'
import {vars} from '@/app/globals.css'
import ScrapModal from '../ScrapModal/ScrapModal'
import Toast from '../Toast/Toast'
import Scrap_active from '/public/images/Scrap_active.svg'
import Scrap_inactive from '/public/images/Scrap_inactive.svg'
import { usePathname } from 'next/navigation'
const cardImages: Record<
  CardType['type'],
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  'relation': Egg,
  'issue': Tomato,
  'love': Sweet,
  'business': Ham,
  'hobby': Cheese,
  'humor': Lettuce,
  'ice-breaker': Avocado,
  'self-development': Pimento,
}
const colorMap = {
  'relation': vars.color.egg,
  'issue': vars.color.tomato,
  'love': vars.color.sweet,
  'business': vars.color.ham,
  'hobby': vars.color.cheese,
  'humor': vars.color.lettuce,
  'ice-breaker': vars.color.avocado,
  'self-development': vars.color.pimento,
  'relationFont': vars.color.eggFont,
  'issueFont': vars.color.tomatoFont,
  'loveFont': vars.color.sweetFont,
  'businessFont': vars.color.hamFont,
  'hobbyFont': vars.color.cheeseFont,
  'humorFont': vars.color.lettuceFont,
  'ice-breakerFont': vars.color.avocadoFont,
  'self-developmentFont': vars.color.pimentoFont,

}
export type DynamicCardProps = CardType &
  RecipeVariants<typeof styles.cardRecipe>

export default function Card({
  size,
  type,
  id,
  title,
  description,
  relativePosition,
  onClick,
  isAlarm,
  alarmNumber,
  isScraped,
  handleScrapDelete,
}: DynamicCardProps) {

  const pathname = usePathname(); // useRouter 대신 usePathname 사용

  const CardImage = cardImages[type] as React.FC<React.SVGProps<SVGSVGElement>>

  //화면 높이에 따라 카드의 비율 조절
  const aspectRatio = 
    Math.max(343/483,343 / 483 + Math.max(0,815 - window.innerHeight) / 483)
  const [isScrap, setIsScrap] = useState<boolean>(false)  
  const [scrap, setScrap] = useState<boolean>(isScraped as boolean)
  const [showToast, setShowToast] = useState<boolean>(false)

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

  const handleScrapClick = (e: React.MouseEvent) => {
    e.stopPropagation(); //이벤트 버블링 방지
    setIsScrap(true);
  };

  const handleScrapClickX = (e: React.MouseEvent) => {
    e.stopPropagation(); //이벤트 버블링 방지
    setIsScrap(false);
  };

  if (size === 'large') {
    return (
      <>
       {isScrap && <ScrapModal onClickX={handleScrapClickX} onClick={handleScrapModalClose} id={id as number}/>}
       {showToast && <Toast text='스크랩 완료'/>}
      <div
        className={styles.cardRecipe({
          size,
          type,
          relativePosition,
        })}
        onClick={onClick}
        style={{aspectRatio: aspectRatio}}
      >
       
        <div style={{padding: '0 24px',width: '100%',display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
        <Subtitle type={type} isSmall={false} isCard={true} />
        <div style={{width: '2rem', height: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: `${colorMap[`${type}Font`]}`}}>
          
          {scrap ? 
          <Scrap_active 
          color='white'
          style={{transform: 'scale(0.6)'}}/> : 
          <Scrap_inactive 
          color='white'
          style={{transform: 'scale(0.6)'}}
          onClick={handleScrapClick}
          />}
        </div>
        </div>

        <CardImage className={styles.cardImage} />

        <div className={styles.largeContentWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      </>
    )
  }
  else if(size === 'medium'){
    return (
      <div className={styles.cardRecipe({ size, type })} onClick={onClick}>
        <div className={styles.smallContentWrapper}>
        <div className={styles.smallTitleWrapper}>
          <Subtitle type={type} isSmall={true} isCard={true} />
        
        </div>
        <h3 className={styles.smallTitle}>{title}</h3>
      </div>
      </div>
    )
  }
  else if(size === 'small'){
    return (
      <>
      {isScrap && <ScrapModal onClickX={handleScrapClickX} onClick={handleScrapModalClose} id={id as number}/>}
      {showToast && <Toast text='스크랩 완료'/>}
      <div className={styles.cardRecipe({ size, type })} onClick={onClick}>
      <div className={styles.smallContentWrapper}>
        <div className={styles.smallTitleWrapper}>
          <Subtitle type={type} isSmall={true} isCard={true} />
          {isAlarm ==true && <div className={styles.alarmNumber({alarmNumber: alarmNumber === 0 ? 0 : undefined})}>{alarmNumber}</div>}
          {isAlarm === false && scrap === false && <Scrap_inactive onClick={handleScrapClick}/>}
          {isAlarm === false && scrap === true && <Scrap_active onClick={(e:React.MouseEvent)=>{
            e.stopPropagation(); // 클릭 이벤트 전파 방지
            if (handleScrapDelete && pathname.startsWith('/scrap')) {//스크랩 상세 페이지에서만 작동
              handleScrapDelete(id as number);
            }
          }}/>}
        </div>
        <h3 className={styles.smallTitle}>{title}</h3>
      </div>
    </div>
    </>
    )
  }
}
