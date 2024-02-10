import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { usersApi } from '../../utils/UsersApi';
import { Main } from '../Main/Main';
import Header from '../Header/Header';

function App() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    usersApi.getUsers()
      .then((res) => {
        setUsers(res);
        console.log(res);
      });
  }, []);
  return (
    <>
    <Header />
      <Main users={users} />
    </>
  );
}

export default App;
