import Card from '@/components/Card/Card'
import * as styles from './Carousel.css'
import { useState, useRef,useEffect } from 'react'
import { carousel } from '@/types/carousel'
import { useRouter } from 'next/navigation'

const Carousel = ({ items }: carousel) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragPointRef = useRef<number>(0);
  const router = useRouter()
  
  useEffect(() => {
    console.log('케루셀아이템:\n',typeof items.length,'\n',items.length,'\n',items)
    
  },[items])

  useEffect(() => {
    setCurrentIndex(0)
     // 케루셀 컨테이너 가져오기
     const carouselDiv = carouselRef.current;
    //케루셀 넘기기 함수
    const handleNext = () => {
      console.log(typeof items.length,items.length)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }
    const handlePrev = () => {
      console.log(typeof items.length,items.length)

      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length
      )
    }
   

    const handleDragStart = (event: MouseEvent | TouchEvent) => {
      if (event instanceof TouchEvent) dragPointRef.current = event.touches[0].clientY;
      else dragPointRef.current = event.clientY;
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent) => {
      // touch 이벤트, mouse 이벤트 구별해서 종료시점 저장
      let endPoint: number;
      if (event instanceof TouchEvent) endPoint = event.changedTouches[0].clientY;
      else endPoint = event.clientY;
      //종료시점에 따라 케루셀 넘기기
      if (endPoint < dragPointRef.current) handleNext();
      else if (endPoint > dragPointRef.current) handlePrev();
      console.log(endPoint,dragPointRef.current)
    };
    //이벤트 리스너 추가
    if (carouselDiv) {
      carouselDiv.addEventListener('mousedown', handleDragStart);
      carouselDiv.addEventListener('touchstart', handleDragStart);
      carouselDiv.addEventListener('mouseup', handleDragEnd);
      carouselDiv.addEventListener('touchend', handleDragEnd);
    }

    // 컴포넌트가 언마운트될때 이벤트 리스너 제거
    return () => {
      if (carouselDiv) {
        carouselDiv.removeEventListener('mousedown', handleDragStart);
        carouselDiv.removeEventListener('touchstart', handleDragStart);
        carouselDiv.removeEventListener('mouseup', handleDragEnd);
        carouselDiv.removeEventListener('touchend', handleDragEnd);
      }
    };
  }, [items]);
  //items를 의존성에 두지 않으면 케루셀 넘기기 이벤트가 작동하지 않는다!
  //items를 받아오기 전에 함수가 실행되어서 items.length가 0이 되어버린다!

  return (
    <div className={styles.OuterContainer} ref={carouselRef}>
    
      {items.map((data, index) => (
      <Card
        key={index}
        size="large"
        type={data.type}
        title={data.title}
        id={data.id}
        description={data.description}
        relativePosition={(() => {
          const diff = index - currentIndex;
          if (diff === 0) return "0";
          if (diff === 1) return "1";
          if (diff === -1) return "-1";
          return "more";
        })()}
        onClick={() => {  
          router.push(`/detail/${data.id}?type=${data.type}&title=${data.title}`)
        }}
      />
      ))}

    </div>
  )
}
export default Carousel
