import styles from './PopupConfirmDelete.module.scss'

export const PopupConfirmDelete = ({
  isOpened,
  onClose,
  removeUsers,
}) => {

  function handleSubmit(evt) {
		evt.preventDefault();
    removeUsers();
    onClose();
	}

  return (
    <div className={`${styles.popup} ${isOpened ? styles.popup_opened : ''}`}>
      <form className={styles.popup__form} onSubmit={handleSubmit}>
        <button
          onClick={onClose}
          className={styles.popup__close}
          type="button"
          aria-label="закрыть окно"
        />
        <h2 className={styles.popup__title}>Подтверждаете удаление?</h2>
        <h3 className={styles.popup__warning}>!</h3>
          <button type='submit' className={styles.popup__button}>OK</button>
      </form>
    </div>
  )

};