import { useState } from 'react';
import styles from './Navegation.module.css';
import UserLoggedIn from './UserLoggedIn';
import UserLoggedOut from './UserLoggedOut';
import UserOptions from './UserOptions';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function Navegation() {
  const [showOptions, setSowOptions] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <nav className={styles['main-nav']}>
      <form className={styles['main-nav-form']}>
        <input type="text" placeholder="Type something..." />
      </form>
      {user ? (
        <UserLoggedIn user={user} onShowOptions={setSowOptions} />
      ) : (
        <UserLoggedOut onShowOptions={setSowOptions} />
      )}
      {showOptions && <UserOptions onShowOptions={setSowOptions} />}
    </nav>
  );
}

export default Navegation;
