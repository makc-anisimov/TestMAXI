import { useState } from 'react';
import styles from './PopupAddUser.module.scss'

export const PopupAddUser = ({
  isOpened,
  onClose,

}) => {
  const [isSpanErrorVisible, setIsSpanErrorVisible] = useState(false);
  const [userData, setUserData] = useState({});
  // name, - обязательное
  // username, - обязательное
  // email, - обязательное + проверка корректности введенной почты
  // phone - обязательное (маска формата +7 999 999-99-99)
  // zipcode - не обязательное 

  const [isSpanNameErrorVisible, setIsSpanNameErrorVisible] = useState(false);
  const [isSpanUsernameErrorVisible, setIsSpanUsernameErrorVisible] = useState(false);
  const [isSpanEmailErrorVisible, setIsSpanEmailErrorVisible] = useState(false);
  const [isSpanPhoneErrorVisible, setIsSpanPhoneErrorVisible] = useState(false);

  const handleChange = (e) => {
    if (isSpanErrorVisible) {
      setIsSpanErrorVisible(false);
    }
    // if (!isEmailValid) {
    //   setIsEmailValid(true)
    // }
    // if (!isPasswordValid) {
    //   setIsPasswordValid(true)
    // }

    const { id, value } = e.target;
    setUserData({
      ...userData,
      [id]: value,
    });
  };




  return (
    <div className={`${styles.popup} ${isOpened ? styles.popup_opened : ''}`}>
      <form className={styles.popup__form}>
        <button
          onClick={onClose}
          className={styles.popup__close}
          type="button"
          aria-label="закрыть окно"
        />
        <h2 className={styles.popup__title}>Укажите данные пользователя</h2>
        <div className={styles.popup__field}>
          <span className={styles.popup__input_title}>name:</span>
          <input
            onChange={handleChange}
            type='text'
            className={styles.popup__input}
            id='name'
            value={userData.name || ''}
            required
          />
        </div>
        <span
          className={`${styles.popup__input_error} ${(isSpanNameErrorVisible) ? styles.popup__input_error_visible : ''}`}
        >
          Поле обязательно для заполнения
        </span>
        <div className={styles.popup__field}>
          <span className={styles.popup__input_title}>username:</span>
          <input
            type='text'
            className={styles.popup__input}
            id='username'
            value={userData.username || ''}
            required
          />
        </div>
        <span
          className={`${styles.popup__input_error} ${(isSpanUsernameErrorVisible) ? styles.popup__input_error_visible : ''}`}
        >
          Поле обязательно для заполнения
        </span>
        <div className={styles.popup__field}>
          <span className={styles.popup__input_title}>email:</span>
          <input
            type='email'
            className={styles.popup__input}
            name='email'
            id='email'
            value={userData.email || ''}
            required
          />
        </div>
        <span
          className={`${styles.popup__input_error} ${(isSpanEmailErrorVisible) ? styles.popup__input_error_visible : ''}`}
        >
          Поле обязательно для заполнения
        </span>
        <div className={styles.popup__field}>
          <span className={styles.popup__input_title}>phone:</span>
          <input
            className={styles.popup__input}
            type='tel'
            id='phone'
            name='phone'
            pattern='+7\s[0-9]{3}\s[0-9]{3}-[0-9]{2}-[0-9]{2}'
            value={userData.phone || ''}
            required
          />
          <span
            className={`${styles.popup__input_error} ${(isSpanPhoneErrorVisible) ? styles.popup__input_error_visible : ''}`}
          >
            Введите номер в формате: +7 999 999-99-99
          </span>
        </div>
        <div className={styles.popup__field}>
          <span className={styles.popup__input_title}>zipcode:</span>
          <input
            type='text'
            className={styles.popup__input}
            id='zipcode'
            value={userData.zipcode || ''}
          />
        </div>
        <button className={styles.popup__button}>Добавить</button>
      </form>
    </div>
  )

};