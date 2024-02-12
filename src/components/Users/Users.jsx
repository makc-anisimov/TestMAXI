import { useSelector } from 'react-redux'
import styles from './Users.module.scss';
import { User } from './User/User';
import { useEffect, useState } from 'react';

export function Users() {

  const [checkedIds, setCheckedIds] = useState([]); // храним список выделенных пользователей
  const usersData = useSelector(state => state.users.users);

  //проверка массива выбранных
  useEffect(() => {
    console.log('checkedIds', checkedIds);
  }, [checkedIds]);


  const toggleCheck = ({ deleteId }) => {
    if (!(checkedIds.includes(deleteId))) {
      setCheckedIds([...checkedIds, deleteId]);
    }
    else {
      setCheckedIds(checkedIds.filter(id => (id !== deleteId)));
    }
  }

  return (
    <main className={styles.users}>
      {/* TODO! сделать форму для фильтрации + кнопки */}
      <button
        className={styles.users__button}
        onClick={() => console.log('add user')} >
        Добавить пользователя
      </button>
      <button className={styles.users__button} onClick={() => console.log('delete user')}>Удалить пользователей</button>

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
    </main>
  )
}