import styles from './Avatar.module.scss';

export function Avatar({name}) {
  return (
    <div className={styles.avatar}>
      <p className={styles.avatar__symb}>{name[0]}</p>
    </div>
  )
}