import styles from './UserLoggedOut.module.css';
import loginIcon from '../assets/login.svg';

type Props = {
  onShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
};

function UserLoggedOut({ onShowOptions }: Props) {
  return (
    <div className={styles.user}>
      <button onClick={() => onShowOptions((pV) => !pV)}>
        <span>Log-In / Register</span>
        <img src={loginIcon} alt="user access icon" />
      </button>
    </div>
  );
}

export default UserLoggedOut;
