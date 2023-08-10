import styles from './Task.module.css';
import Card from './UI/Card';
import trashIcon from '../assets/trash.svg';
import editIcon from '../assets/edit.svg';
import checkIcon from '../assets/check.svg';
import backIcon from '../assets/back.svg';
import uncheckBox from '../assets/uncheck-box.svg';
import checkBox from '../assets/check-box.svg';
import { useDispatch } from 'react-redux';
import {
  TaskType,
  callTaskApi,
  completeTask,
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
        url: import.meta.env.VITE_SERVER_URL + 'tasks/' + task.id,
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

  const completeHandler = (isCompleted: boolean) => {
    const token = JSON.parse(localStorage.getItem('user')!).token;
    dispatch(
      callTaskApi({
        url: `${import.meta.env.VITE_SERVER_URL}tasks/${task.id}`,
        token,
        body: { completed: isCompleted, description: task.description },
        method: 'PATCH',
      })
    );
    dispatch(completeTask({ id: task.id, isCompleted }));
  };

  const cardClass =
    task.color === 'pink'
      ? `${styles.pink} ${styles.card}`
      : task.color === 'green'
      ? `${styles.green} ${styles.card}`
      : `${styles.yellow} ${styles.card}`;

  return (
    <Card className={task.completed ? styles.completed : cardClass}>
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
        {!task.completed && (
          <button onClick={editHandler}>
            <img src={editIcon} alt="edit icon" />
          </button>
        )}
        <button onClick={() => completeHandler(task.completed ? false : true)}>
          <img
            src={task.completed ? checkBox : uncheckBox}
            alt="uncompleted task icon"
          />
        </button>
      </div>
    </Card>
  );
}

export default Task;
