'use client'
import * as styles from './page.css'
import { useState, useEffect } from 'react'
import { getPolicys, Policy } from '@/api/my/getPolicys'
import BackBar from '@/components/BackBar/BackBar'

const App = () => {
  const [data, setData] = useState<Policy[]>([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const policies = await getPolicys();
        setData(policies);
      } catch (error) {
        console.error('개인정보 처리방침 가져오기 오류:', error);
      }
    };
    fetchPolicies();
  }, []);

  return (
    <>
      <BackBar label='개인정보정책'/>
      <main className={styles.Main}>
        {data.map((policy, index) => (
          <div key={index} className={styles.TermContainer}>
            <h2 className={styles.TermTitle}>{policy.title}</h2>
            <p className={styles.TermContent}>{policy.content}</p>
          </div>
        ))}
      </main>
    </>
  )
}

export default App
