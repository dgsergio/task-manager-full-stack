import Header from './components/Header';
import styles from './App.module.css';
import ListTasks from './components/sections/ListTasks';
import TaskManager from './components/sections/TaskManager';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <TaskManager />
        <ListTasks />
      </main>
    </div>
  );
}

export default App;
