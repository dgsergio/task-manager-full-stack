import { useDispatch } from 'react-redux';
import styles from './Sign.module.css';
import { toggleSignin } from '../../store/userSlice';

function Signin() {
  const dispatch = useDispatch();
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>Log-in</h3>{' '}
        <button onClick={() => dispatch(toggleSignin(false))}>x</button>
      </div>
      <form className={styles.body}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="john@mail.com" />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="*******" />
        </div>
        <hr />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Signin;
