import styles from './Task.module.css';
import Card from './UI/Card';
import trashIcon from '../assets/trash.svg';
import editIcon from '../assets/edit.svg';
import checkIcon from '../assets/check.svg';
import backIcon from '../assets/back.svg';
import { useDispatch } from 'react-redux';
import {
  TaskType,
  callTaskApi,
  deleteTask,
  selectTask,
  toggleManager,
} from '../store/tasksSlice';
import { AppDispatch } from '../store';
import { useState } from 'react';

type Props = {
  task: TaskType;
};

function Task({ task }: Props) {
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const deleteHandler = () => {
    const token = JSON.parse(localStorage.getItem('user')!).token;
    dispatch(
      callTaskApi({
        url: 'http://localhost:3000/api/v1/tasks/' + task.id,
        token,
        method: 'DELETE',
      })
    );
    dispatch(deleteTask(task.id));
  };

  const editHandler = () => {
    dispatch(selectTask(task.id));
    dispatch(toggleManager(true));
  };

  const confirmHandler = () => {
    setConfirmDelete((pV) => !pV);
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
      <div className={styles['card-icons']}>
        {confirmDelete && (
          <button onClick={confirmHandler} title={'cancel delete'}>
            <img src={backIcon} alt="cancel delete icon" />
          </button>
        )}
        <button onClick={!confirmDelete ? confirmHandler : deleteHandler}>
          <img
            src={!confirmDelete ? trashIcon : checkIcon}
            alt="delete icon"
            title={!confirmDelete ? 'delete task' : 'are you sure?'}
          />
        </button>
        <button onClick={editHandler}>
          <img src={editIcon} alt="edit icon" />
        </button>
      </div>
    </Card>
  );
}

export default Task;
