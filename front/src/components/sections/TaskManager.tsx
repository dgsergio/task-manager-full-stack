import Card from '../UI/Card';
import styles from './TaskManager.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import {
  createTask,
  toggleManager,
  selectTask,
  searchTasks,
  TaskType,
  callTaskApi,
} from '../../store/tasksSlice';
import { useEffect, useRef, useState } from 'react';
import { Validator } from '../../models/types';
import { taskValidation } from '../../utils/taskValidation';

function TaskManager() {
  const [colorTask, setColorTask] = useState<string>('yellow');
  const [error, setError] = useState<string>();
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const dispatch: AppDispatch = useDispatch();
  const idSelected = useSelector((state: RootState) => state.tasks.idSelected);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const taskSelected = tasks.find((task) => task.id === idSelected);

  useEffect(() => {
    if (taskSelected) setColorTask(taskSelected.color);
  }, []);

  const cancelHandler = () => {
    dispatch(toggleManager(false));
    dispatch(selectTask(''));
  };

  const colorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorTask(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchTasks(undefined));

    const validator: Validator = taskValidation(
      titleRef.current?.value,
      descRef.current?.value
    );

    if (validator.hasError) {
      setError(validator.msg);
      setTimeout(() => {
        setError('');
      }, 4000);
      return;
    }

    const newTask: TaskType = {
      id: taskSelected?.id || Date.now().toString(),
      title: titleRef.current?.value || '',
      color: colorTask,
      completed: taskSelected?.completed || false,
      description: descRef.current!.value,
    };

    const token = JSON.parse(localStorage.getItem('user')!).token;
    if (!taskSelected) {
      dispatch(
        callTaskApi({
          url: 'http://localhost:3000/api/v1/tasks',
          token,
          method: 'POST',
          body: {
            title: newTask.title,
            color: newTask.color,
            description: newTask.description,
          },
        })
      );
    } else {
      dispatch(
        callTaskApi({
          url: 'http://localhost:3000/api/v1/tasks/' + newTask.id,
          token,
          method: 'PATCH',
          body: {
            title: newTask.title,
            color: newTask.color,
            description: newTask.description,
          },
        })
      );
    }
    dispatch(createTask(newTask));
  };

  return (
    <section>
      <h2>Tasks Manager</h2>
      <Card className={styles['manager-card']}>
        <form onSubmit={submitHandler}>
          <div className={styles['manager-card-form-block']}>
            <label htmlFor="title">Title</label>
            <input
              placeholder="Name your task..."
              type="text"
              id="title"
              defaultValue={taskSelected && taskSelected.title}
              ref={titleRef}
            />
          </div>
          <div className={styles['manager-card-form-block']}>
            <label htmlFor="description">Description*</label>
            <textarea
              placeholder="Describe what you have to do..."
              id="description"
              defaultValue={taskSelected && taskSelected.description}
              ref={descRef}
              cols={30}
              rows={10}
            />
          </div>
          <div className={styles['manager-card-footer']}>
            <div className={styles['manager-card-footer-colors']}>
              <input
                type="radio"
                id="yellow"
                name="color"
                value="yellow"
                defaultChecked={
                  !taskSelected
                    ? true
                    : taskSelected.color === 'yellow'
                    ? true
                    : false
                }
                onChange={colorHandler}
              />
              <input
                type="radio"
                id="pink"
                name="color"
                value="pink"
                defaultChecked={
                  !taskSelected
                    ? false
                    : taskSelected.color === 'pink'
                    ? true
                    : false
                }
                onChange={colorHandler}
              />
              <input
                type="radio"
                id="green"
                name="color"
                value="green"
                defaultChecked={
                  !taskSelected
                    ? false
                    : taskSelected.color === 'green'
                    ? true
                    : false
                }
                onChange={colorHandler}
              />
            </div>
            {error && <p className={styles.error}>{error} </p>}
            <div className={styles['manager-card-btns']}>
              <button type="button" onClick={cancelHandler}>
                Cancel
              </button>
              <button type="submit" disabled={error ? true : false}>
                Send
              </button>
            </div>
          </div>
        </form>
      </Card>
    </section>
  );
}

export default TaskManager;
