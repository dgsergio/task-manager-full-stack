import styles from './Sign.module.css';

function Signin() {
  return (
    <section className={styles.section}>
      <h3>Log-in</h3>
      <form>
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
