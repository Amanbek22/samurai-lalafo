import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: JSON.parse(localStorage.getItem('auth')),
    },
    reducers: {
        login: (state) => {
            state.isAuth = true
        },
        logout: (state) => {
            state.isAuth = false
        }
    }
})

export const authSliceActions = authSlice.actions;
export const authSliceReducer = authSlice.reducer;