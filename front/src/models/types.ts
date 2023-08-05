export type TaskType = {
  id: string;
  title?: string;
  description: string;
  color: string;
  completed: boolean;
};

export type Validator = {
  hasError: boolean;
  msg: string;
};
