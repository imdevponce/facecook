import styles from './footer.module.css'
import InstagramIcon from './icons/InstagramIcon'
import TwitterXIcon from './icons/TwitterXIcon'
import TikTokIcon from './icons/TikTokIcon'
export default function Footer () {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div>
            <strong className={styles.strong}>
                FaceCook
            </strong>
            <div className={styles.info}>
                <a href='https://google.com' className={styles.infoItem}>Contact</a>
                <a href='https://google.com' className={styles.infoItem}>About us</a>
                <a href='https://google.com' className={styles.infoItem}>Cookies policy</a>
            </div>
        </div>
        <div>  
            <strong className={styles.strong}>Follow us on:</strong>
            <div>
                <InstagramIcon height={30} width={30}/>
                <TwitterXIcon height={30} width={30}/>
                <TikTokIcon height={30} width={30}/>
            </div>
        </div>
      </div>
    </footer>
  )
}
