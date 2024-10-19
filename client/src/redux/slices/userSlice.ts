import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
    isAuthenticated: boolean,
    user: {id: string, username: string, email: string} | null;
    token: string | null;
}

const initialState: userState = {
    isAuthenticated: false,
    user: null,
    token: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ user: { id: string; username: string; email: string }; token: string }>) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        },
    },
});
export const {login, logout} = userSlice.actions;
export default userSlice.reducer;