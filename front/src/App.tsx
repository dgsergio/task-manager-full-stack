import { useEffect } from 'react';
import Header from './components/Header';
import styles from './App.module.css';
import ListTasks from './components/sections/ListTasks';
import TaskManager from './components/sections/TaskManager';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { TaskReq, callTaskApi } from './store/tasksSlice';

function App() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch: AppDispatch = useDispatch();
  const searchedTasks = useSelector(
    (state: RootState) => state.tasks.searchedTasks
  );
  const showManager = useSelector(
    (state: RootState) => state.tasks.showManager
  );
  const ids = searchedTasks?.map((i) => i.id);
  const filteredTasks = tasks.filter((task) => ids?.includes(task.id));

  useEffect(() => {
    const userLocal = localStorage.getItem('user');

    if (userLocal) {
      const request: TaskReq = {
        url: 'http://localhost:3000/api/v1/tasks',
        token: JSON.parse(userLocal).token,
      };
      dispatch(callTaskApi(request));
    }
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
