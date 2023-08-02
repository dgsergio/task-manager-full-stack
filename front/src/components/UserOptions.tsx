import styles from './UserOptions.module.css';
import { useDispatch } from 'react-redux';
import { toggleSignin, toggleSignup } from '../store/userSlice';

type Props = {
  onShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
};

function UserOptions({ onShowOptions }: Props) {
  const dispatch = useDispatch();

  const signHandler = (isNew: boolean = false) => {
    dispatch(toggleSignup(isNew ? true : false));
    dispatch(toggleSignin(isNew ? false : true));
    onShowOptions(false);
  };

  return (
    <>
      <div className={styles.backdrop} onClick={() => onShowOptions(false)} />
      <ul className={styles.options}>
        <li>
          <button onClick={() => signHandler()}>Log-in</button>
        </li>
        <li>
          <button onClick={() => signHandler(true)}>Register</button>
        </li>
        <li>
          <button>Log-out</button>
        </li>
      </ul>
    </>
  );
}

export default UserOptions;
