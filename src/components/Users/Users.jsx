import { useSelector } from 'react-redux'
import styles from './Users.module.scss';
import { User } from './User/User';
import { useEffect, useState } from 'react';

export function Users({
  // checkedIds,
  toggleCheck,
}) {

  const usersData = useSelector(state => state.users.users);

  return (
    <div className={styles.users}>
      {/* TODO! сделать форму для фильтрации + кнопки */}

      <ul className={styles.users__list}>
        <li className={styles.users__title}  >
          <div className={styles.users__title_check} />
          <div className={styles.users__title_id}>
            ID
          </div>
          <div className={styles.users__title_avatar} />
          <div className={styles.users__title_name}>
            Name
          </div>
          <div className={styles.users__title_username}>
            Username
          </div>
          <div className={styles.users__title_email}>
            email
          </div>
          <div className={styles.users__title_phone}>
            phone
          </div>
          <div className={styles.users__title_zipcode}>
            zipcode
          </div>
        </li>
        {usersData.map((user) => (
          <User user={user} onCheck={toggleCheck} key={user.id} />
        ))}
      </ul>
    </div>
  )
}