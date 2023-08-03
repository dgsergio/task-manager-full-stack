import { useState } from 'react';
import styles from './Navegation.module.css';
import UserLoggedIn from './UserLoggedIn';
import UserLoggedOut from './UserLoggedOut';
import UserOptions from './UserOptions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import searchIcon from '../assets/search.svg';
import deleteIcon from '../assets/delete.svg';
import { searchTasks, toggleManager } from '../store/tasksSlice';

function Navegation() {
  const [showOptions, setSowOptions] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const queryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleManager(false));
    setQuery(e.target.value);
    dispatch(searchTasks(e.target.value));
  };

  const deleteQuery = () => {
    setQuery('');
    dispatch(searchTasks(''));
  };

  return (
    <nav className={styles['main-nav']}>
      <form className={styles['main-nav-form']}>
        <input
          onChange={queryHandler}
          type="text"
          placeholder="Type something..."
          value={query}
        />
        <button
          type="button"
          onClick={deleteQuery}
          disabled={query === '' && true}
        >
          {query === '' && <img src={searchIcon} alt="search icon" />}
          {query !== '' && <img src={deleteIcon} alt="delete icon" />}
        </button>
      </form>
      {user && <UserLoggedIn user={user} onShowOptions={setSowOptions} />}
      {!user && <UserLoggedOut onShowOptions={setSowOptions} />}
      {showOptions && <UserOptions onShowOptions={setSowOptions} />}
    </nav>
  );
}

export default Navegation;
