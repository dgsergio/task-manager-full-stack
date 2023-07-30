import styles from './Task.module.css';
import Card from './UI/Card';

function Task() {
  return (
    <Card className={styles.card}>
      <h3>Title of task</h3>
      <p>
        00hr 12min Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
        non tempore ipsa eos nam architecto error repellendus, laudantium
        excepturi.
      </p>
    </Card>
  );
}

export default Task;
