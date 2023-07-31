import { TaskType } from '../models/types';
import styles from './Task.module.css';
import Card from './UI/Card';
import trashIcon from '../assets/trash.svg';
import editIcon from '../assets/edit.svg';

type Props = {
  task: TaskType;
};

function Task({ task }: Props) {
  const cardClass =
    task.color === 'pink'
      ? `${styles.pink} ${styles.card}`
      : task.color === 'green'
      ? `${styles.green} ${styles.card}`
      : `${styles.yellow} ${styles.card}`;

  return (
    <Card className={cardClass}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className={styles['card-icons']}>
        <button>
          <img src={trashIcon} alt="delete icon" />
        </button>
        <button>
          <img src={editIcon} alt="edit icon" />
        </button>
      </div>
    </Card>
  );
}

export default Task;
