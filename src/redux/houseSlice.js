import { createSlice } from "@reduxjs/toolkit";

const housesSlice = createSlice({
  name: "houses",
  initialState: {
    data: [],
  },
  reducers: {
    addHouses: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const housesSliceActions = housesSlice.actions
export const housesSliceReducer = housesSlice.reducer
