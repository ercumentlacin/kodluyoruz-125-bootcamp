import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://612cd1bcab461c00178b5ee4.mockapi.io/api/v1/projects";

const initialState = { data: [], loading: false, error: "", local: [] };

export const createForm = createAsyncThunk("createForm", async (formData) => {
  try {
    const response = await axios.post(URL, formData);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const getForms = createAsyncThunk("getForms", async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error;
  }
});

const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    addForm: (state, action) => {}
  },
  extraReducers: (builder) => {
    builder.addCase(createForm.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(createForm.rejected, (state) => {
      state.loading = false;
      state.error = "hata";
    });
    builder.addCase(createForm.fulfilled, (state, action) => {
      state.local = action.payload;
      state.loading = false;
    });

    builder.addCase(getForms.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getForms.rejected, (state) => {
      state.loading = false;
      state.error = "hata";
    });
    builder.addCase(getForms.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
  }
});

const { actions, reducer } = formsSlice;
// Extract and export each action creator by name
export const { addForm } = actions;
// Export the reducer, either as a default or named export

export default reducer;
