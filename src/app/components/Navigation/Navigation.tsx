'use client'
import React from 'react'
import Link from 'next/link'
import * as styles from './Navigation.css'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '@/constants/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <div className={styles.Container}>
      {NAV_ITEMS.map(({ Icon, text, path }) => (
        <Link key={text} href={path} className={styles.ButtonWrapper}>
          <Icon color={pathname === path ? 'white' : 'black'} />
          <span
            className={styles.ButtonText}
            style={{ color: pathname === path ? 'white' : 'black' }}
          >
            {text}
          </span>
        </Link>
      ))}
    </div>
  )
}
