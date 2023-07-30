import Task from '../Task';
import styles from './ListTasks.module.css';

function ListTasks() {
  return (
    <section>
      <h2>List of Tasks</h2>
      <div className={styles.tasks}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </section>
  );
}

export default ListTasks;
