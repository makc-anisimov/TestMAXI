import styles from './Footer.module.scss';


export function Footer() {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>&copy;&nbsp;{date.getFullYear()}&nbsp;Maxim Anisimov</p>
    </footer>
  )
}
