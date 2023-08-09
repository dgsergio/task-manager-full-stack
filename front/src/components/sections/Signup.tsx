import { useDispatch, useSelector } from 'react-redux';
import styles from './Sign.module.css';
import { postUser, toggleSignup } from '../../store/userSlice';
import { useRef, useState } from 'react';
import { AppDispatch, RootState } from '../../store';
import { signupValidation } from '../../utils/userValidation';
import { Validator } from '../../models/types';
import { toggleListTasks } from '../../store/tasksSlice';

function Signup() {
  const dispatch: AppDispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);
  const requestStatus = useSelector(
    (state: RootState) => state.user.requestStatus
  );
  const [msgValidator, setMsgValidator] = useState<string>();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameRef.current?.value);
    const respond: Validator = signupValidation(
      emailRef.current!.value,
      passwordRef.current!.value,
      repeatPasswordRef.current!.value,
      nameRef.current!.value
    );

    if (respond.hasError) {
      setMsgValidator(respond.msg);
      dispatch(toggleListTasks(true));
      return;
    }

    const request = {
      url: 'http://localhost:3000/api/v1/signup',
      body: {
        name: nameRef.current!.value,
        email: emailRef.current!.value,
        password: passwordRef.current!.value,
      },
    };
    const noErrors = await dispatch(postUser(request));
    if (noErrors) dispatch(toggleSignup(false));
    else setMsgValidator(requestStatus.msg);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>Register</h3>
        <button onClick={() => dispatch(toggleSignup(false))}>x</button>
      </div>
      <form className={styles.body} onSubmit={submitHandler}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input type="name" id="text" ref={nameRef} placeholder="john" />
        </div>
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
        <div className={styles.field}>
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            type="password"
            id="repeatPassword"
            placeholder="******"
            ref={repeatPasswordRef}
          />
        </div>
        <hr />
        {!requestStatus.loading && (msgValidator || requestStatus.msg) && (
          <p className="msg error">
            {msgValidator ? msgValidator : requestStatus.msg}
          </p>
        )}
        <button type="submit" disabled={requestStatus.loading}>
          {requestStatus.loading ? 'Loading' : 'Create Account'}
        </button>
      </form>
    </section>
  );
}

export default Signup;
