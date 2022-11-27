import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createDesignation = createAsyncThunk(
    "designation/create",
    async (desigData) => {
      const res = await axios.post("http://localhost:8000/api/storedesignation",desigData);
      return res.data;
    }
  );

  export const updateDesignation = createAsyncThunk(
    "designation/update",
    async (desigDataUpdate) => {
      const headers = { 
        'Content-Type': 'application/json'
      };
      const res = await axios.post(
        "http://localhost:8000/api/updatedesignation/"+desigDataUpdate.idd, desigDataUpdate);
      return res.data;
    }
  );

export const fetchDesig = createAsyncThunk("designation/fetchDept", async () => {
    const res = await axios.get("http://localhost:8000/api/getdesignations");
    return res.data;
});

export const deleteDesig = createAsyncThunk(
    "designation/delete",
    async (id)  => {
     const res =  await axios.post("http://localhost:8000/api/deletedesignation/"+id);
      return res.data;
    }
  );

const initialState = [];

export const DesignationSlice = createSlice({
    name: "designation",
    initialState,
    extraReducers: {
        [fetchDesig.fulfilled]: (state, action) => {
            return [...action.payload];
        },
        [createDesignation.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        [updateDesignation]: (state, action) => {
            return [...action.payload];
        },
        [deleteDesig.fulfilled]: (state, action) => {
            const id = action.payload;
            state = state.filter((dept) => dept.id !== id);
        },
        
    },    
});


export default DesignationSlice.reducer;