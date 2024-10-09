'use client'
import * as styles from './page.css'
import { useState, useEffect } from 'react'
import { getTerms, Term } from '@/api/my/getTerms'
import BackBar from '@/components/BackBar/BackBar'


const App = () => {
  const [data, setData] = useState<Term[]>([]);

 
  useEffect(() => {
    const fetchTerms = async () => {
      const terms = await getTerms();
      setData(terms);
      console.log(terms)
    };
    fetchTerms();
  }, []);

  return (
    <>
      <BackBar label='이용약관'/>
      <main className={styles.Main}>
        {data.map((term, index) => (
          <div key={index} className={styles.TermContainer}>
            <h2 className={styles.TermTitle}>{term.title}</h2>
            {term.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={styles.SectionContainer}>
                <h3 className={styles.ContentTitle}>{section.mainCategory}.{section.subCategory}. {section.contentTitle}</h3>
                <p className={styles.Content}>{section.content}</p>
              </div>
            ))}
          </div>
        ))}
      </main>
    </>
  )
}

export default App
