import { TaskType } from '../models/types';
import styles from './Task.module.css';
import Card from './UI/Card';
import trashIcon from '../assets/trash.svg';
import editIcon from '../assets/edit.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, selectTask, toggleManager } from '../store/tasksSlice';
import { RootState } from '../store';

type Props = {
  task: TaskType;
};

function Task({ task }: Props) {
  const dispatch = useDispatch();
  const showManager = useSelector(
    (state: RootState) => state.tasks.showManager
  );

  const deleteHandler = () => {
    dispatch(deleteTask(task.id));
  };

  const editHandler = () => {
    dispatch(selectTask(task.id));
    dispatch(toggleManager(true));
  };

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
      {!showManager && (
        <div className={styles['card-icons']}>
          <button onClick={deleteHandler}>
            <img src={trashIcon} alt="delete icon" />
          </button>
          <button onClick={editHandler}>
            <img src={editIcon} alt="edit icon" />
          </button>
        </div>
      )}
    </Card>
  );
}

export default Task;
