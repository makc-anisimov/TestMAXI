import styles from './PopupAddUser.module.scss'
import { Field, Form, Formik } from 'formik';
import { EMAIL_REGEXP, PHONE_REGEXP } from '../../utils/const';
import classNames from 'classnames';

export function PopupAddUser({
  isOpened,
  onClose,
  addUser,
  users,
}) {

  const getlastIndex = (array) => {
    console.log(array);
    let maxID = 0;
    for (let i = 0; i < array.length; i++) {
      const currentID = array[i].id;
      if (currentID > maxID) {
        maxID = currentID;
      }
    }
    return (maxID + 1);
  }

  const handleSubmit = (values, actions) => {
    addUser({
      values,
      id: getlastIndex(users),
    });
    actions.resetForm({
      values: {
        name: '',
        username: '',
        email: '',
        phone: '',
        zipcode: '',
      }
    });
    onClose();
  }

  function validateEmail(value) {
    if (!value) {
      return 'Обязательное поле'
    }
    else if (!EMAIL_REGEXP.test(value)) {
      return 'Некорректный email адрес';
    };
  }

  function validatePhone(value) {
    // console.log(value);
    if (!value) {
      return 'Обязательное поле'
    }
    else if (!PHONE_REGEXP.test(value)) {
      return 'Введите номер телефона в формате +7 999 999-99-99';
    };
  }

  function validateDefault(value) {
    if (!value) {
      return 'Обязательное поле'
    }
  };

  return (
    <div className={`${styles.popup} ${isOpened ? styles.popup_opened : ''}`}>
      <button
        onClick={onClose}
        className={styles.popup__close}
        type="button"
        aria-label="закрыть окно"
      />
      <Formik
        initialValues={{
          name: '',
          username: '',
          email: '',
          phone: '',
          zipcode: '',
        }}
        onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className={styles.popup__form}>
            <h2 className={styles.popup__title}>Укажите данные пользователя</h2>
            <div className={styles.popup__field}>
              <label className={styles.popup__input_title}>name:</label>
              <Field
                type='text'
                name='name'
                className={styles.popup__input}
                validate={validateDefault}
              />
              <label className={classNames(styles.popup__input_error, { [styles.popup__input_error_visible]: errors.name && touched.name })}>
                {errors.name}
              </label>
            </div>
            <div className={styles.popup__field}>
              <label className={styles.popup__input_title}>username:</label>
              <Field
                type='text'
                name='username'
                className={styles.popup__input}
                validate={validateDefault}
              />
              <label className={classNames(styles.popup__input_error, { [styles.popup__input_error_visible]: errors.username && touched.username })}>
                {errors.username}
              </label>
            </div>
            <div className={styles.popup__field}>
              <label className={styles.popup__input_title}>email:</label>
              <Field
                type='email'
                name='email'
                className={styles.popup__input}
                validate={validateEmail}
              />
              <label className={classNames(styles.popup__input_error, { [styles.popup__input_error_visible]: errors.email && touched.email })}>
                {errors.email}
              </label>
            </div>
            <div className={styles.popup__field}>
              <label className={styles.popup__input_title}>phone:</label>
              <Field
                type='tel'
                name='phone'
                className={styles.popup__input}
                validate={validatePhone}
              // validate={validateDefault}
              />
              <label className={classNames(styles.popup__input_error, { [styles.popup__input_error_visible]: errors.phone && touched.phone })}>
                {errors.phone}
              </label>
            </div>
            <div className={styles.popup__field}>
              <label className={styles.popup__input_title}>zipcode:</label>
              <Field
                type='text'
                name='zipcode'
                className={styles.popup__input}
              />
            </div>
            <button type='submit' className={styles.popup__button}>Добавить</button>
          </Form>
        )}
      </Formik>
    </div >
  )
};