import styles from './Task.module.css';

function Task() {
  return (
    <div className={styles.card}>
      <h3>Title of task</h3>
      <p>
        00hr 12min Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
        non tempore ipsa eos nam architecto error repellendus, laudantium
        excepturi.
      </p>
    </div>
  );
}

export default Task;
