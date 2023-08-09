import { useEffect } from 'react';
import Header from './components/Header';
import styles from './App.module.css';
import ListTasks from './components/sections/ListTasks';
import TaskManager from './components/sections/TaskManager';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { TaskReq, callTaskApi, toggleListTasks } from './store/tasksSlice';

function App() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const searchedTasks = useSelector(
    (state: RootState) => state.tasks.searchedTasks
  );
  const showManager = useSelector(
    (state: RootState) => state.tasks.showManager
  );
  const showListTasks = useSelector(
    (state: RootState) => state.tasks.showListTasks
  );
  const taskStatus = useSelector(
    (state: RootState) => state.tasks.requestStatus
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
      dispatch(toggleListTasks(true));
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <Header />
      <main>
        {showManager && <TaskManager />}
        {showListTasks && !showManager && (
          <>
            <ListTasks tasks={!searchedTasks ? tasks : filteredTasks} />
            {!taskStatus.loading && taskStatus.msg && (
              <div className="error msg">{taskStatus.msg}</div>
            )}
            {!taskStatus.loading && tasks.length < 1 && (
              <div className="msg">You have not created any tasks yet</div>
            )}
            {!taskStatus.loading &&
              tasks.length > 0 &&
              searchedTasks &&
              searchedTasks.length === 0 && (
                <div className="msg">No search result found</div>
              )}
          </>
        )}
      </main>
      <footer>
        <a href="http://pixel40.com.ar" target="_blank">
          Pixel40's Dev
        </a>
        <div>*You must sign in to use this app</div>
      </footer>
    </div>
  );
}

export default App;
