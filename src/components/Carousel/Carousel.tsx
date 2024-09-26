import Card from '@/components/Card/Card'
import * as styles from './Carousel.css'
import { useState } from 'react'
import { carousel } from '@/types/carousel'

const Carousel = ({ items }: carousel) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  //테스트 코드: 케루셀 넘기기
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    )
  }

  return (
    <div className={styles.OuterContainer}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          color: 'white',
          position: 'absolute',
          top: 0,
        }}
      >
        <button onClick={handlePrev}>이전</button>
        {currentIndex}
        <button onClick={handleNext}>다음</button>
      </div>
      {items.map((data, index) => (
        <Card
          key={index}
          size="large"
          type={data.type}
          title={data.title}
          description={data.description}
          now={index === currentIndex}
          prev={index < currentIndex}
        />
      ))}
    </div>
  )
}
export default Carousel
