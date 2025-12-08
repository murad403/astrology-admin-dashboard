import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
    user: null | object;
}

const initialState: TInitialState = {
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TInitialState>) =>{
            state.user = null
        }
    }
})

export const {setUser} = authSlice.actions;
export default authSlice.reducer;