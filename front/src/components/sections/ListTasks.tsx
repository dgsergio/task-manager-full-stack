import Task from '../Task';
import styles from './ListTasks.module.css';
import addIcon from '../../assets/add.svg';
import { useDispatch, useSelector } from 'react-redux';
import { TaskType, toggleManager } from '../../store/tasksSlice';
import { RootState } from '../../store';

type Props = { tasks: TaskType[] };

function ListTasks({ tasks }: Props) {
  const dispatch = useDispatch();
  const showManager = useSelector(
    (state: RootState) => state.tasks.showManager
  );
  const taskStatus = useSelector(
    (state: RootState) => state.tasks.requestStatus
  );

  return (
    <section>
      <div className={styles.header}>
        <h2>List of Tasks</h2>

        {!showManager && (
          <button onClick={() => dispatch(toggleManager(true))}>
            <img className={styles.icon} src={addIcon} alt="add note icon" />
          </button>
        )}
      </div>
      {taskStatus.loading && <div className={styles.msg}>Loading...</div>}
      <div className={styles.tasks}>
        {tasks
          ?.map((task: TaskType) => <Task key={task.id} task={task} />)
          .reverse()}
      </div>
    </section>
  );
}

export default ListTasks;
