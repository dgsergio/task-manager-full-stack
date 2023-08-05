import styles from './UserLoggedIn.module.css';
import { User } from '../store/userSlice';

type Props = {
  user: User;
  onShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
};

function UserLoggedIn({ user, onShowOptions }: Props) {
  const userName = user.name[0].toUpperCase() + user.name.slice(1);
  const userIcon =
    user.name[0].toUpperCase() + user.name[1].toLocaleLowerCase();

  return (
    <div className={styles.user}>
      <span>Hi {userName}!</span>
      <div className={styles['user-icon']}>
        <button onClick={() => onShowOptions((pV) => !pV)}>{userIcon}</button>
      </div>
    </div>
  );
}

export default UserLoggedIn;
