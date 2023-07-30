import Card from '../UI/Card';
import styles from './TaskManager.module.css';

function ListTasks() {
  return (
    <section className={styles.manager}>
      <h2>Tasks Manager</h2>
      <Card className={styles['manager-card']}>
        <form>
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
        </form>
      </Card>
    </section>
  );
}

export default ListTasks;
