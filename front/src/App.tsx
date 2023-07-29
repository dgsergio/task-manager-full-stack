import Header from './components/Header';
import styles from './App.module.css';
import ListTasks from './components/sections/ListTasks';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <ListTasks />
      </main>
    </div>
  );
}

export default App;
