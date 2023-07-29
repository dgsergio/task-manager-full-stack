import styles from './Navegation.module.css';

function Navegation() {
  return (
    <nav className={styles['main-nav']}>
      <form className={styles['main-nav-form']}>
        <input type="text" placeholder="Type something..." />
      </form>
    </nav>
  );
}

export default Navegation;
