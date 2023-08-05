import styles from './UserOptions.module.css';
import { useDispatch } from 'react-redux';
import {
  User,
  signinUser,
  toggleSignin,
  toggleSignup,
} from '../store/userSlice';

type Props = {
  user?: User;
  onShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
};
function UserOptions({ onShowOptions, user }: Props) {
  const dispatch = useDispatch();

  const signHandler = (isNew: boolean = false) => {
    dispatch(toggleSignup(isNew ? true : false));
    dispatch(toggleSignin(isNew ? false : true));
    onShowOptions(false);
  };

  const logoutHandler = () => {
    onShowOptions(false);
    dispatch(signinUser(undefined));
    localStorage.clear();
  };

  return (
    <>
      <div className={styles.backdrop} onClick={() => onShowOptions(false)} />
      <ul className={styles.options}>
        {!user && (
          <>
            <li>
              <button onClick={() => signHandler()}>Log-in</button>
            </li>
            <li>
              <button onClick={() => signHandler(true)}>Register</button>
            </li>
          </>
        )}
        {user && (
          <li>
            <button onClick={logoutHandler}>Log-out</button>
          </li>
        )}
      </ul>
    </>
  );
}

export default UserOptions;
