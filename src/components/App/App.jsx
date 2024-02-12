import { useEffect } from 'react';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { addUsers, createUser, removeUsers, fetchUsers } from '../../store/usersSlice'
import { Users } from '../Users/Users';

function App() {
  const dispatch = useDispatch();
  const addUser = () => dispatch(createUser());

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Users />
    </>
  );
}

export default App;
