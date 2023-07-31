import Header from './components/Header';
import styles from './App.module.css';
import ListTasks from './components/sections/ListTasks';
import TaskManager from './components/sections/TaskManager';
import { dummyTasks } from './mocks/dummy_tasks';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const showManager = useSelector(
    (state: RootState) => state.counter.showManager
  );

  return (
    <div className={styles.container}>
      <Header />
      <main>
        {showManager && <TaskManager />}
        <ListTasks tasks={dummyTasks} />
      </main>
    </div>
  );
}

export default App;
