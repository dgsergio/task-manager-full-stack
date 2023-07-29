import Tasks from '../Tasks';
import styles from './ListTasks.module.css';

function ListTasks() {
  return (
    <section className={styles.section}>
      <h1>Tasks Manager</h1>
      <Tasks />
    </section>
  );
}

export default ListTasks;
