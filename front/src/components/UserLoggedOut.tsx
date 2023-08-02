import styles from './UserLoggedOut.module.css';
import loginIcon from '../assets/login.svg';

function UserLoggedOut({
  onShowOptions,
}: {
  onShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
