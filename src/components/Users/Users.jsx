import { useSelector } from 'react-redux'
import styles from './Users.module.scss';
import { User } from '../../widgets/User/User';
import { useState } from 'react';

export function Users({
  toggleCheck,
  onClick,
}) {

  const usersData = useSelector(state => state.users.users);
  const [nameColumnSorted, setNameColumnSorted] = useState('');

  const handleClick = (evt) => {
    setNameColumnSorted(evt.target.name);
    console.log(evt.target);
    onClick(evt.target.name);
  };

  return (
    <div className={styles.users}>
      <ul className={styles.users__list}>
        <li className={styles.users__title}  >
          <div className={styles.users__title_check} />
          <button
            className={`${styles.users__title_id} ${(nameColumnSorted === 'id') ? styles.users__title_active : ''}`}
            name='id'
            type='button'
            onClick={handleClick}
          >
            ID&#160;&#8645;
          </button>
          <div className={styles.users__title_avatar} />
          <button
            className={`${styles.users__title_name} ${(nameColumnSorted === 'name') ? styles.users__title_active : ''}`}
            name='name'
            type='button'
            onClick={handleClick}>
            Name&#160;&#8645;
          </button>
          <div className={styles.users__title_username}>
            Username
          </div>
          <div className={styles.users__title_email}>
            email
          </div>
          <div className={styles.users__title_phone}>
            phone
          </div>
          <button
            className={`${styles.users__title_zipcode} ${(nameColumnSorted === 'zipcode') ? styles.users__title_active : ''}`}
            name='zipcode'
            type='button'
            onClick={handleClick}>
            zipcode&#160;&#8645;
          </button>
        </li>
        {usersData.map((user) => (
          <User user={user} onCheck={toggleCheck} key={user.id} />
        ))}
      </ul>
    </div>
  )
}