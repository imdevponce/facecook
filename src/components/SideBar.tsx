'use client'
import React from 'react'
import { menuAtom } from '@/components/icons/menuAtom'
import { useAtom } from 'jotai'
import styles from './sidebar.module.css'
import XIcon from './icons/XIcon'
import Link from 'next/link'
const SideBar = () => {
  const [isVisible, setIsVisible] = useAtom(menuAtom)
  const onHandleClick = () => {
    setIsVisible(!isVisible)
  }
  if (isVisible) {
    return (
      <>
        <div className={styles.sideBarContainer}>
          <div className={styles.xContainer}>
            <XIcon height={25} width={25} onClick={onHandleClick}/>
          </div>
          <div className={styles.barLinksContainer}>
            <Link href="/recipes" onClick={onHandleClick} className={styles.link}>
                Recipes
            </Link>
          </div>
        </div>
        <div className={styles.overlayContent}/>
      </>
    )
  }
  return null
}

export default SideBar
