import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/Api";

export const initialize = createAsyncThunk("houses/initialize", async () => {
  const res = await API.getAllAds();
  return res.data;
});

export const deleteCardById = createAsyncThunk("houses/delete", async (id) => {
  await API.deleteAdById(id);
  return id;
});

export const addHouse = createAsyncThunk("houses/addHouse", async (data) => {
  const res =  await API.createAd(data)
  return res.data;
})

const housesSlice = createSlice({
  name: "houses",
  initialState: {
    loading: true,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initialize.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteCardById.fulfilled, (state, action) => {
      const newArr = state.data.filter((item) => item.id !== action.payload);
      state.data = newArr;
    });
    builder.addCase(addHouse.fulfilled, (state, action) => {
      state.data.push(action.payload)
    })
    // builder.addCase(initialize.pending)
    // builder.addCase(initialize.rejected)
  },
});

export const housesSliceActions = housesSlice.actions;
export const housesSliceReducer = housesSlice.reducer;
