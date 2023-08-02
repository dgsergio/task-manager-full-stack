import styles from './UserOptions.module.css';

function UserOptions({
  onShowOptions,
}: {
  onShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className={styles.backdrop} onClick={() => onShowOptions(false)} />
      <ul className={styles.options}>
        <li>
          <button>Log-in</button>
        </li>
        <li>
          <button>Register</button>
        </li>
        <li>
          <button>Log-out</button>
        </li>
      </ul>
    </>
  );
}

export default UserOptions;
