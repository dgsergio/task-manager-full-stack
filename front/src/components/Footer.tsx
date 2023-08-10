import { useSelector } from 'react-redux';
import styles from './Footer.module.css';
import { RootState } from '../store';

function Footer() {
  const showListTask = useSelector(
    (state: RootState) => state.tasks.showListTasks
  );

  return (
    <footer className={styles.footer}>
      <h1>Task Manager</h1>
      {!showListTask && <div>*You must sign in to use this app</div>}
      <a href="http://pixel40.com.ar" target="_blank">
        @Pixel40's Dev
      </a>
    </footer>
  );
}

export default Footer;
