import { useEffect } from 'react';
import Header from './components/Header';
import styles from './App.module.css';
import ListTasks from './components/sections/ListTasks';
import TaskManager from './components/sections/TaskManager';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { populate } from './store/tasksSlice';
import { dummyTasks } from './mocks/dummy';

function App() {
  const showManager = useSelector(
    (state: RootState) => state.tasks.showManager
  );
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(populate(dummyTasks));
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main>
        {showManager && <TaskManager />}
        <ListTasks tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
