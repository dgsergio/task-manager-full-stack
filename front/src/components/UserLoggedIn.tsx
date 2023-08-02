import styles from './UserLoggedIn.module.css';
import { User } from '../models/types';

type Props = {
  user: User;
  onShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
};

function UserLoggedIn({ user, onShowOptions }: Props) {
  const textIcon =
    user.name[0].toUpperCase() + user.name[1].toLocaleLowerCase();

  return (
    <div className={styles.user}>
      <span>Hi {user.name}!</span>
      <div className={styles['user-icon']}>
        <button onClick={() => onShowOptions((pV) => !pV)}>{textIcon}</button>
      </div>
    </div>
  );
}

export default UserLoggedIn;
