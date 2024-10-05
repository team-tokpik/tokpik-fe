'use client'
import * as styles from './page.css'
import { useState, useEffect } from 'react'
import { getTerms, Term } from '@/api/my/getTerms'
import BackBar from '@/components/BackBar/BackBar'

interface Section {
  mainCategory: string;
  subCategory: string;
  contentTitle: string;
  content: string;
}

interface TermData {
  title: string;
  content: string;
  sections: Section[];
}

const App = () => {
  const [data, setData] = useState<TermData[]>([]);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const terms = await getTerms();
        const formattedTerms: TermData[] = terms.map((term: Term) => ({
          title: term.title,
          content: term.content,
          sections: [{
            mainCategory: '',
            subCategory: '',
            contentTitle: '',
            content: term.content
          }]
        }));
        setData(formattedTerms);
        console.log(formattedTerms)
      } catch (error) {
        console.error('약관 정보 가져오기 오류:', error);
      }
    };
    fetchTerms();
  }, []);

  return (
    <>
      <BackBar />
      <main className={styles.Main}>
        {data.map((term, index) => (
          <div key={index} className={styles.TermContainer}>
            <h2 className={styles.TermTitle}>{term.title}</h2>
            {term.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={styles.SectionContainer}>
                <h3 className={styles.ContentTitle}>{section.contentTitle}</h3>
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
