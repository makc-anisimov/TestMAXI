import styles from './App.module.scss'
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, createUser, removeUsers, fetchUsers } from '../../store/usersSlice'
import { Users } from '../Users/Users';
import { PopupConfirmDelete } from '../../widgets/PopupConfirmDelete/PopupConfirmDelete';
import { PopupAddUser } from '../../widgets/PopupAddUser/PopupAddUser';

function App() {

  const [isPopupConfirmDeleteOpened, setIsPopupConfirmDeleteOpened] = useState(false);
  const [isPopupAddUserOpened, setIsPopupAddUserOpened] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]); // храним список выделенных пользователей


  const closeAllPopups = () => {
    setIsPopupConfirmDeleteOpened(false);
    setIsPopupAddUserOpened(false);
  }

  const openPopupAddUser = () => {
    setIsPopupAddUserOpened(true);
  };

  const openPopupConfirmDelete = () => {
    setIsPopupConfirmDeleteOpened(true);
  };

  const toggleCheck = ({ deleteId }) => {
    if (!(checkedIds.includes(deleteId))) {
      setCheckedIds([...checkedIds, deleteId]);
    }
    else {
      setCheckedIds(checkedIds.filter(id => (id !== deleteId)));
    }
  }

  const dispatch = useDispatch();

  const { status, error } = useSelector(state => state.users);

  const addUser = (data) => dispatch(createUser(data));

  const deleteUsers = () => {
    
    dispatch(removeUsers(checkedIds));
    setCheckedIds([]);
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <Header />
      <main>
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
        {status === 'loading' && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        <Users
          // checkedIds={checkedIds}
          toggleCheck={toggleCheck}
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
        />
      </main>
    </div>
  );
}

export default App;
