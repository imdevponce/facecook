'use client'
import styles from './footer.module.css'
export default function Footer () {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <strong className={styles.brand}>
          FaceCook
        </strong>
        <div className={styles.info}>
          <p className={styles.infoItem}>Contacto</p>
          <p className={styles.infoItem}>Sobre nosotros</p>
          <p className={styles.infoItem}>Politica de Cookies</p>
        </div>
      </div>
    </footer>
  )
}
