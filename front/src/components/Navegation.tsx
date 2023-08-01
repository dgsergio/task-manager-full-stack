import { useSelector } from 'react-redux';
import styles from './Navegation.module.css';
import { RootState } from '../store';

function Navegation() {
  const user = useSelector((state: RootState) => state.user.user);
  const textIcon =
    user.name[0].toUpperCase() + user.name[1].toLocaleLowerCase();

  return (
    <nav className={styles['main-nav']}>
      <form className={styles['main-nav-form']}>
        <input type="text" placeholder="Type something..." />
      </form>
      <div className={styles['main-nav-user']}>
        <span>Hi {user.name}!</span>
        <div className={styles['main-nav-user-icon']}>
          <button>{textIcon}</button>
        </div>
      </div>
    </nav>
  );
}

export default Navegation;
