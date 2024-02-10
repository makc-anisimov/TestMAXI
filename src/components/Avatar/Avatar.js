import styles from './Avatar.module.scss';

export function Avatar({name}) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  //   function getRandomColor() {
  //     var letters = '0123456789ABCDEF';
  //     var color = '#';
  //     for (var i = 0; i < 6; i++) {
  //         color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  // }

  return (
    <div className={styles.avatar}>
      <p className={styles.avatar__symb}>{name[0]}</p>
    </div>
  )
}