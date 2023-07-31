import Task from '../Task';
import styles from './ListTasks.module.css';
import { TaskType } from '../../models/types';
import addIcon from '../../assets/add.svg';
import { useDispatch } from 'react-redux';
import { toggleManager } from '../../store/tasksSlice';

type Props = { tasks: TaskType[] };

function ListTasks({ tasks }: Props) {
  const dispatch = useDispatch();

  return (
    <section>
      <div className={styles.header}>
        <h2>List of Tasks</h2>
        <button onClick={() => dispatch(toggleManager(true))}>
          <img className={styles.icon} src={addIcon} alt="add note icon" />
        </button>
      </div>
      <div className={styles.tasks}>
        {tasks?.map((task: TaskType) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

export default ListTasks;
