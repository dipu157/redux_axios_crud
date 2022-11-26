import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import DepartmentSlice from '../features/department/DepartmentSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    departments: DepartmentSlice,
  },
});
