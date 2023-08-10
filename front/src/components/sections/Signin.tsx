import { useDispatch, useSelector } from 'react-redux';
import styles from './Sign.module.css';
import { postUser, toggleSignin, toggleSignup } from '../../store/userSlice';
import { useRef, useState } from 'react';
import { AppDispatch, RootState } from '../../store';
import { signinValidation } from '../../utils/userValidation';
import { Validator } from '../../models/types';
import {
  TaskReq,
  callTaskApi,
  searchTasks,
  toggleListTasks,
} from '../../store/tasksSlice';

function Signin() {
  const dispatch: AppDispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const requestStatus = useSelector(
    (state: RootState) => state.user.requestStatus
  );
  const [msgValidator, setMsgValidator] = useState<string>();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const respond: Validator = signinValidation(
      emailRef.current!.value,
      passwordRef.current!.value
    );

    if (respond.hasError) {
      setMsgValidator(respond.msg);
      return;
    }

    const request = {
      url: import.meta.env.VITE_SERVER_URL + 'login',
      body: {
        email: emailRef.current!.value,
        password: passwordRef.current!.value,
      },
    };
    const noErrors = await dispatch(postUser(request));
    if (noErrors) {
      dispatch(toggleSignin(false));
      dispatch(toggleListTasks(true));
      dispatch(searchTasks(undefined));

      const userLocal = localStorage.getItem('user');

      if (userLocal) {
        const request: TaskReq = {
          url: import.meta.env.VITE_SERVER_URL + 'tasks',
          token: JSON.parse(userLocal).token,
        };
        dispatch(callTaskApi(request));
      }
    } else setMsgValidator(requestStatus.msg);
  };

  const switchSign = () => {
    dispatch(toggleSignin(false));
    dispatch(toggleSignup(true));
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>Log-in</h3>
      </div>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="john@mail.com"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="******"
          />
        </div>
        {!requestStatus.loading && (msgValidator || requestStatus.msg) && (
          <p className="msg error">
            {msgValidator ? msgValidator : requestStatus.msg}
          </p>
        )}
        <button type="submit" disabled={requestStatus.loading}>
          {requestStatus.loading ? 'Loading' : 'Send'}
        </button>
      </form>
      <hr />
      <button onClick={switchSign}>Need an account? REGISTER</button>
    </section>
  );
}

export default Signin;
