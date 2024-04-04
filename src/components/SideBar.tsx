'use client'
import React from 'react'
import { menuAtom } from '@/components/icons/menuAtom'
import { useAtom } from 'jotai'
import styles from './sidebar.module.css'
import XIcon from './icons/XIcon'
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
            <a href="https://www.simplyrecipes.com/" onClick={onHandleClick} className={styles.link}>
                Recipes
            </a>
          </div>
        </div>
        <div className={styles.overlayContent}/>
      </>
    )
  }
  return null
}

export default SideBar
