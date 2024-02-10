import { Avatar } from '../Avatar/Avatar';
import styles from './Main.module.scss';
// @use

export function Main({ users }) {
  return (
    <>
      <ul className={styles.users}>
        {users?.map((user) => (
          <li className={styles.users__row} key={user.id}>
            <input type='checkbox' className={styles.users__cell_check}/>
            <div className={styles.users__cell_id}>
              {user.id}
            </div>
            <div className={styles.users__cell_avatar}>
              <Avatar name={user.name}></Avatar>

</div>
            <div className={styles.users__cell_name}>
              {user.name}
            </div>
            <div className={styles.users__cell_username}>
              {user.username}
            </div>
            <div className={styles.users__cell_email}>
              {user.email}
            </div>
            <div className={styles.users__cell_phone}>
              {user.phone}
            </div>
            <div className={styles.users__cell_zipcode}>
              {user.address.zipcode}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}