import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { dummyTasks } from '../mocks/dummy_tasks';
import { TaskType } from '../models/types';

export interface TaskState {
  tasks: TaskType[];
  showManager: boolean;
}

const initialState: TaskState = {
  tasks: dummyTasks,
  showManager: false,
};

export const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    toggleManager: (state, action: PayloadAction<boolean>) => {
      state.showManager = action.payload;
    },
  },
});

export const { toggleManager } = tasksSlice.actions;

export default tasksSlice.reducer;
