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
  const searchedTasks = useSelector(
    (state: RootState) => state.tasks.searchedTasks
  );

  const ids = searchedTasks?.map((i) => i.id);
  const filteredTasks = tasks.filter((task) => ids?.includes(task.id));

  useEffect(() => {
    dispatch(populate(dummyTasks));
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main>
        {showManager && <TaskManager />}
        {!showManager && (
          <ListTasks tasks={!searchedTasks ? tasks : filteredTasks} />
        )}
      </main>
    </div>
  );
}

export default App;
