import { Avatar } from '../../shared/ui/Avatar/Avatar'
import styles from './User.module.scss'

export const User = ({
  user,
  onCheck
}) => {

  function changeSelection() {
    onCheck({ deleteId: user.id });
  }

  return (
    <li className={styles.user} key={user.id}>
      <input
        type='checkbox'
        className={styles.user__check}
        onChange={changeSelection}
      />
      <div className={styles.user__id}>
        {user.id}
      </div>
      <div className={styles.user__avatar}>
        <Avatar name={user.name}></Avatar>
      </div>
      <div className={styles.user__name}>
        {user.name}
      </div>
      <div className={styles.user__username}>
        {user.username}
      </div>
      <div className={styles.user__email}>
        {user.email}
      </div>
      <div className={styles.user__phone}>
        {user.phone}
      </div>
      <div className={styles.user__zipcode}>
        {user.address?.zipcode}
      </div>
    </li>
  )
}