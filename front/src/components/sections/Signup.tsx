import styles from './Sign.module.css';
import { toggleSignup } from '../../store/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>Register</h3>
        <button onClick={() => dispatch(toggleSignup(false))}>x</button>
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
        <div className={styles.field}>
          <label htmlFor="passwordRepeat">Repeat Password</label>
          <input type="password" id="passwordRepeat" placeholder="*******" />
        </div>
        <hr />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Login;
