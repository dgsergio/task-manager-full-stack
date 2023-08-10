import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '.';

export type TaskType = {
  id: string;
  title?: string;
  description: string;
  color: string;
  completed: boolean;
};

export interface TaskState {
  tasks: TaskType[];
  searchedTasks: TaskType[] | undefined;
  idSelected: string;
  showManager: boolean;
  showListTasks: boolean;
  requestStatus: { loading: boolean; msg: string };
}

const initialState: TaskState = {
  tasks: [],
  searchedTasks: undefined,
  idSelected: '',
  showManager: false,
  showListTasks: false,
  requestStatus: { loading: false, msg: '' },
};

export const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    populate: (state, action: PayloadAction<TaskType[]>) => {
      state.tasks = action.payload;
    },
    createTask: (state, action: PayloadAction<TaskType>) => {
      if (state.idSelected === '') {
        state.tasks = [...state.tasks, action.payload];
      } else {
        state.idSelected = '';
        state.tasks = state.tasks.map((task) =>
          task.id !== action.payload.id ? task : action.payload
        );
      }
      state.showManager = false;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    completeTask: (
      state,
      action: PayloadAction<{ id: string; isCompleted: boolean }>
    ) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: action.payload.isCompleted }
          : task
      );
    },
    toggleManager: (state, action: PayloadAction<boolean>) => {
      state.showManager = action.payload;
    },
    toggleListTasks: (state, action: PayloadAction<boolean>) => {
      state.showListTasks = action.payload;
    },
    selectTask: (state, action: PayloadAction<string>) => {
      state.idSelected = action.payload;
    },
    searchTasks: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload === undefined) {
        state.searchedTasks = undefined;
        return;
      } else if (action.payload.trim() === '')
        state.searchedTasks = state.tasks;
      state.searchedTasks = state.tasks.filter((task) => {
        const descLowerCase = task.description.toLowerCase();
        const titleLowerCase = task.title?.toLowerCase() || '';
        const queryLowerCase = action.payload!.toLowerCase();

        return (
          descLowerCase.includes(queryLowerCase) ||
          titleLowerCase.includes(queryLowerCase)
        );
      });
    },
    setStatus: (
      state,
      action: PayloadAction<{ loading: boolean; msg: string }>
    ) => {
      state.requestStatus = action.payload;
    },
  },
});

type TaskApiType = {
  _id: string;
  title?: string;
  description: string;
  color: string;
  completed: boolean;
};

export type TaskReq = {
  url: string;
  token: string;
  method?: 'POST' | 'PATCH' | 'DELETE';
  body?: {
    title?: string;
    description: string;
    color?: string;
    completed?: boolean;
  };
};

export const callTaskApi = (req: TaskReq) => {
  const transformTaskData = (tasks: TaskApiType[]) => {
    let newTask: TaskType[] = [];
    for (const task of tasks) {
      newTask.push({
        id: task._id,
        color: task.color,
        title: task.title,
        description: task.description,
        completed: task.completed,
      });
    }
    return newTask;
  };

  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setStatus({ loading: true, msg: '' }));
      const response = await fetch(req.url, {
        method: req.method || 'GET',
        headers: req.body
          ? {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${req.token}`,
            }
          : {
              Authorization: `Bearer ${req.token}`,
            },
        body: req.body ? JSON.stringify(req.body) : null,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.msg);
      if (!req.method) {
        const transformedData = transformTaskData(data.tasks);
        dispatch(populate(transformedData));
      }
      dispatch(setStatus({ loading: false, msg: '' }));
      return data;
    } catch (err: any) {
      dispatch(setStatus({ loading: false, msg: err.message }));
    }
  };
};

export const {
  toggleManager,
  toggleListTasks,
  populate,
  createTask,
  deleteTask,
  selectTask,
  searchTasks,
  setStatus,
  completeTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
