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
    addHouse: (state, action) => {
      state.data.push(action.payload)
    },
    deleteHouse: (state, action) => {
      const newArr = state.data.filter( (item) => item.id !== action.payload )
      state.data = newArr
    }
  },
});

export const housesSliceActions = housesSlice.actions
export const housesSliceReducer = housesSlice.reducer
