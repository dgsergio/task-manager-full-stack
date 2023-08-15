import { TaskType } from '../store/tasksSlice';
import { User } from '../store/userSlice';

export const userDummy: User = {
  id: 'u1',
  name: 'john',
  email: 'john@email.com',
  token: 'no_token',
};

export const dummyTasks: TaskType[] = [
  {
    id: 't1',
    title: 'Study',
    description: 'Learn a new language',
    color: 'yellow',
    completed: false,
  },
  {
    id: 't2',
    title: 'Run',
    description: 'Begin a training',
    color: 'pink',
    completed: true,
  },
  {
    id: 't3',
    title: 'Walk',
    description: 'Enjoy life',
    color: 'green',
    completed: false,
  },
  {
    id: 't4',
    title: 'Sing a song',
    description: `Never made it as a wise man I couldn't cut it as a poor man stealing Tired of living like a blind.`,
    color: 'green',
    completed: false,
  },
];
