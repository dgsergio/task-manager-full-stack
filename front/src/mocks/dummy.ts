import { TaskType, User } from '../models/types';

export const userDummy: User = {
  id: 'u1',
  name: 'john',
  email: 'john@email.com',
};

export const dummyTasks: TaskType[] = [
  {
    id: 't1',
    title: 'Study',
    description: 'Learn a new language',
    createdBy: 'john',
    createdAt: '2023-07-27T13:49:18.549+00:00',
    updatedAt: '2023-07-27T13:49:18.549+00:00',
    color: 'yellow',
    completed: false,
  },
  {
    id: 't2',
    title: 'Run',
    description: 'Begin a training',
    createdBy: 'john',
    createdAt: '2023-07-27T13:49:18.549+00:00',
    updatedAt: '2023-07-27T13:49:18.549+00:00',
    color: 'pink',
    completed: true,
  },
  {
    id: 't3',
    title: 'Walk',
    description: 'Enjoy life',
    createdBy: 'john',
    createdAt: '2023-07-27T13:49:18.549+00:00',
    updatedAt: '2023-07-27T13:49:18.549+00:00',
    color: 'green',
    completed: false,
  },
  {
    id: 't4',
    title: 'Sing a song',
    description: `Never made it as a wise man I couldn't cut it as a poor man stealing Tired of living like a blind.`,
    createdBy: 'john',
    createdAt: '2023-07-27T13:49:18.549+00:00',
    updatedAt: '2023-07-27T13:49:18.549+00:00',
    color: 'green',
    completed: false,
  },
];
