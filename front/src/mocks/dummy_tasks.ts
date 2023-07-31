import { TaskType } from '../models/types';

export const dummyTasks: TaskType[] = [
  {
    id: 't1',
    title: 'Study',
    description: 'Learn a new language',
    createdBy: 'John',
    createdAt: '2023-07-27T13:49:18.549+00:00',
    updatedAt: '2023-07-27T13:49:18.549+00:00',
    color: 'yellow',
    completed: false,
  },
  {
    id: 't2',
    title: 'Run',
    description: 'Begin a training',
    createdBy: 'John',
    createdAt: '2023-07-27T13:49:18.549+00:00',
    updatedAt: '2023-07-27T13:49:18.549+00:00',
    color: 'pink',
    completed: true,
  },
  {
    id: 't3',
    title: 'Walk',
    description: 'Enjoy life',
    createdBy: 'John',
    createdAt: '2023-07-27T13:49:18.549+00:00',
    updatedAt: '2023-07-27T13:49:18.549+00:00',
    color: 'green',
    completed: false,
  },
  {
    id: 't4',
    title: 'Sing a song',
    description: `Never made it as a wise man I couldn't cut it as a poor man stealing Tired of living like a blind.`,
    createdBy: 'John',
    createdAt: '2023-07-27T13:49:18.549+00:00',
    updatedAt: '2023-07-27T13:49:18.549+00:00',
    color: 'green',
    completed: false,
  },
];
