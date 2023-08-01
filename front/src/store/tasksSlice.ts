import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TaskType } from '../models/types';

export interface TaskState {
  tasks: TaskType[];
  idSelected: string;
  showManager: boolean;
}

const initialState: TaskState = {
  tasks: [],
  idSelected: '',
  showManager: false,
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
    toggleManager: (state, action: PayloadAction<boolean>) => {
      state.showManager = action.payload;
    },
    selectTask: (state, action: PayloadAction<string>) => {
      state.idSelected = action.payload;
    },
  },
});

export const { toggleManager, populate, createTask, deleteTask, selectTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
