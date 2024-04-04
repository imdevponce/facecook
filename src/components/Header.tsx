'use client'
import { useState } from 'react'
import styles from "./header.module.css";
import Image from "next/image";
import MenuIcon from './icons/MenuIcon'
import UserIcon from './icons/UserIcon'
import Link from "next/link";
export default function Header() {
  const [displayUserOptions, setDisplayUserOptions] = useState(false)
  const onHandleClick = () => {
    setDisplayUserOptions(!displayUserOptions)
  }
  return (
    <header className={styles.headerContainer}>
        <MenuIcon height={30} width={30}/>
        <Link href="/">
          <Image className={styles.facecookLogo} src="/facecook-logo.png" alt="FaceCook logo" height={52} width={130}/>
        </Link>
        <div className={styles.userOptionsContainer}>
          <UserIcon height={30} width={30} onClick={onHandleClick}/>
          {displayUserOptions ? (
            <ul className={styles.userOptions}>
              <Link href='/profile' className={styles.link} >
                <li >My profile</li>
              </Link>
            </ul>) 
            : null
          }
        </div>
    </header>
  );
}
