import { useDispatch, useSelector } from 'react-redux';
import styles from './Sign.module.css';
import { postUser, toggleSignin } from '../../store/userSlice';
import { useRef, useState } from 'react';
import { AppDispatch, RootState } from '../../store';
import { signinValidation } from '../../utils/userValidation';
import { Validator } from '../../models/types';

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
      url: 'http://localhost:3000/api/v1/login',
      body: {
        email: emailRef.current!.value,
        password: passwordRef.current!.value,
      },
    };
    const noErrors = await dispatch(postUser(request));
    if (noErrors) dispatch(toggleSignin(false));
    else setMsgValidator(requestStatus.msg);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>Log-in</h3>
        <button onClick={() => dispatch(toggleSignin(false))}>x</button>
      </div>
      <form className={styles.body} onSubmit={submitHandler}>
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
        <hr />
        {!requestStatus.loading && msgValidator && (
          <p className={styles.error}>{msgValidator}</p>
        )}
        <button type="submit" disabled={requestStatus.loading}>
          Send
        </button>
      </form>
    </section>
  );
}

export default Signin;
