'use client'
import * as styles from './page.css'
import { useState,useEffect } from 'react'
import { getTerms,Term } from '@/api/my/getTerms'
import BackBar from '@/components/BackBar/BackBar'
const App = () => {
  const [data, setData] = useState<Term[]>([]);
  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const terms = await getTerms();
        setData(terms);
      } catch (error) {
        console.error('약관 정보 가져오기 오류:', error);
      }
    };
    fetchTerms();
  }, []);
  return (
    <>
    <BackBar/>
      <main className={styles.Main}>
        {data.map((term, index) => (
          <div key={index} className={styles.TermContainer}>
            <h2 className={styles.TermTitle}>{term.title}</h2>
            <p className={styles.TermContent}>{term.content}</p>
          </div>
        ))}

      </main>
    </>
  )
}
export default App
