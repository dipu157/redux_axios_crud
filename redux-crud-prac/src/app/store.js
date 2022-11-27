import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import DepartmentSlice from '../features/department/DepartmentSlice';
import DesignationSlice from '../features/designation/DesignationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    departments: DepartmentSlice,
    designations: DesignationSlice,
  },
});
