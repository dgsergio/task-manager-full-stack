import Card from '../UI/Card';
import styles from './TaskManager.module.css';
import { useDispatch } from 'react-redux';
import { toggleManager } from '../../store/tasksSlice';

function ListTasks() {
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Sending task');
  };

  return (
    <section className={styles.manager}>
      <h2>Tasks Manager</h2>
      <Card className={styles['manager-card']}>
        <form onSubmit={submitHandler}>
          <div className={styles['manager-card-form-block']}>
            <label htmlFor="title">Title</label>
            <input placeholder="Name your task..." type="text" id="title" />
          </div>
          <div className={styles['manager-card-form-block']}>
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="Describe what you have to do..."
              id="description"
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
                defaultChecked
              />
              <input type="radio" id="pink" name="color" value="pink" />
              <input type="radio" id="green" name="color" value="green" />
            </div>
            <div className={styles['manager-card-btns']}>
              <button
                type="button"
                onClick={() => dispatch(toggleManager(false))}
              >
                Cancel
              </button>
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </Card>
    </section>
  );
}

export default ListTasks;
