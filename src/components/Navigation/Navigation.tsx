'use client'
import React from 'react'
import Link from 'next/link'
import * as styles from './Navigation.css'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '../../constants/navigation'
import { vars } from '@/app/globals.css'
export default function Navigation() {
  const pathname = usePathname()

  return (
    <div className={styles.Container}>
      {NAV_ITEMS.map(({ Icon, text, path }) => (
        <Link key={text} href={path} className={styles.ButtonWrapper}>
          <Icon color={pathname === path ? vars.color.white : vars.color.gray2} />
          <span
            className={styles.ButtonText}
            style={{ color: pathname === path ? vars.color.white : vars.color.gray2 }}
          >
            {text}
          </span>
        </Link>
      ))}
    </div>
  )
}
