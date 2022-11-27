import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createDepartment = createAsyncThunk(
    "Department/create",
    async (deptData) => {
      const res = await axios.post("http://localhost:8000/api/storedepartment",deptData);
      return res.data;
    }
  );

  export const updateDepartment = createAsyncThunk(
    "Department/update",
    async (deptDataUpdate) => {
      const headers = { 
        'Content-Type': 'application/json'
      };
      const res = await axios.post(
        "http://localhost:8000/api/updatedepartment/"+deptDataUpdate.idd,deptDataUpdate);
      
      return res.data;

    }
  );

export const fetchDept = createAsyncThunk("Department/fetchDept", async () => {
    const res = await axios.get("http://localhost:8000/api/getdepartments");
    return res.data;
});

export const deleteDept = createAsyncThunk(
    "Department/delete",
    async (id)  => {
     const res =  await axios.post("http://localhost:8000/api/deletedepartment/"+id);
      return res.data;
    }
  );

const initialState = [];

export const DepartmentSlice = createSlice({
    name: "Department",
    initialState,
    extraReducers: {
        [fetchDept.fulfilled]: (state, action) => {
            return [...action.payload];
        },
        [createDepartment.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        [updateDepartment]: (state, action) => {
            return [...action.payload];
          },
        [deleteDept.fulfilled]: (state, action) => {
            const id = action.payload;
            state = state.filter((dept) => dept.id !== id);
        },
        
    },    
});


export default DepartmentSlice.reducer;