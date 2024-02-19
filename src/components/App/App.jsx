import styles from './App.module.scss'
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, removeUsers, filterUser, sortUsers, fetchUsers } from '../../store/usersSlice'
import { Users } from '../Users/Users';
import { PopupConfirmDelete } from '../../widgets/PopupConfirmDelete/PopupConfirmDelete';
import { PopupAddUser } from '../../widgets/PopupAddUser/PopupAddUser';
import { Footer } from '../Footer/Footer';

function App() {

  const dispatch = useDispatch();
  const { status, error, users } = useSelector(state => state.users);

  const [isPopupConfirmDeleteOpened, setIsPopupConfirmDeleteOpened] = useState(false);
  const [isPopupAddUserOpened, setIsPopupAddUserOpened] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);
  const [nameFilterField, setNameFilterField] = useState('name');
  const [valueFilterField, setValueFilterField] = useState('');

  const openPopupAddUser = () => {
    setIsPopupAddUserOpened(true);
  };

  const openPopupConfirmDelete = () => {
    setIsPopupConfirmDeleteOpened(true);
  };

  const closeAllPopups = () => {
    setIsPopupConfirmDeleteOpened(false);
    setIsPopupAddUserOpened(false);
  }

  const toggleCheck = ({ deleteId }) => {
    if (!(checkedIds.includes(deleteId))) {
      setCheckedIds([...checkedIds, deleteId]);
    }
    else {
      setCheckedIds(checkedIds.filter(id => (id !== deleteId)));
    }
  }

  const handleChangeFilter = (evt) => {
    setNameFilterField(evt.target.value);
  }

  const handleChangeInput = (evt) => {
    setValueFilterField(evt.target.value);
  }
  const handleFilterButton = (evt) => {
    evt.preventDefault();
    if (valueFilterField !== '') {
      dispatch(filterUser({ name: nameFilterField, value: valueFilterField }));
    }
    else {
      dispatch(fetchUsers());
    }
  }

  const addUser = (data) => dispatch(createUser(data));

  const deleteUsers = () => {
    dispatch(removeUsers(checkedIds));
    setCheckedIds([]);
  }

  const sortData = (fieldName) => {
    dispatch(sortUsers(fieldName));
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <Header />
      <main>
        <div className={styles.actions}>
          <form className={styles.filter__container}
            onSubmit={handleFilterButton}>
            <select
              className={styles.filter__select}
              name='select'
              onChange={handleChangeFilter}
            >
              <option value='name'>name</option>
              <option value='email'>email</option>
              <option value='phone'>phone</option>
            </select>
            <input
              className={styles.filter__input}
              type='text'
              name='filter'
              onChange={handleChangeInput}
            >
            </input>
            <button
              type='submit'
              className={styles.filter__button}
            />
          </form>
          <button
            type='button'
            className={styles.button}
            onClick={openPopupAddUser} >
            Добавить пользователя
          </button>
          <button
            type='button'
            className={`${styles.button} ${!(checkedIds.length > 0) ? styles.button_notActive : ''}`}
            onClick={openPopupConfirmDelete}
            disabled={!(checkedIds.length > 0)}>
            Удалить пользователей
          </button>

        </div>
        {status === 'loading' && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        <Users
          toggleCheck={toggleCheck}
          onClick={sortData}
        />
        <PopupConfirmDelete
          isOpened={isPopupConfirmDeleteOpened}
          onClose={closeAllPopups}
          removeUsers={deleteUsers}
        />
        <PopupAddUser
          isOpened={isPopupAddUserOpened}
          onClose={closeAllPopups}
          addUser={addUser}
          users={users}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
