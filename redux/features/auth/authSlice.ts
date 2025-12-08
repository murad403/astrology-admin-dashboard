import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
    user: null | object;
    accessToken: null | string;
}

const initialState: TInitialState = {
    user: null,
    accessToken: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TInitialState>) =>{
            const {user, accessToken} = action.payload;
            state.user = user;
            state.accessToken = accessToken;
        },
        removeUser: (state) =>{
            state.user = null;
            state.accessToken = null;
        }
    }
})

export const {setUser, removeUser} = authSlice.actions;
export default authSlice.reducer;