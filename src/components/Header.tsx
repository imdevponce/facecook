import styles from "./header.module.css";
import Image from "next/image";
import MenuIcon from './icons/MenuIcon'
import UserIcon from './icons/UserIcon'
import Link from "next/link";
export default function Header() {
  return (
    <header className={styles.headerContainer}>
        <MenuIcon height={30} width={30}/>
        <Link href="/">
          <Image className={styles.facecookLogo} src="/facecook-logo.png" alt="FaceCook logo" height={52} width={130}/>
        </Link>
        <UserIcon height={30} width={30} />
    </header>
  );
}
