import styles from './UserOptions.module.css';
import { useDispatch } from 'react-redux';
import {
  User,
  signinUser,
  toggleSignin,
  toggleSignup,
} from '../store/userSlice';
import { populate, searchTasks, toggleListTasks } from '../store/tasksSlice';

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
    localStorage.clear();
    dispatch(signinUser(undefined));
    dispatch(searchTasks(undefined));
    dispatch(populate([]));
    dispatch(toggleListTasks(false));
    dispatch(toggleSignin(true));
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
