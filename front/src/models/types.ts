export type TaskType = {
  id: string;
  title?: string;
  description: string;
  color: string;
  completed: boolean;
};

export type User = {
  id: string;
  name: string;
  email: string;
};
