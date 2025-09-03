// FIX — import types separately
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
    error: null,
};
// Async thunk for registration
export const registerUser = createAsyncThunk("register/registerUser", async (credentials, { rejectWithValue }) => {
    try {
        const response = await api.post("/auth/register/", credentials);
        return response.data; // { id, email }
    }
    catch (err) {
        return rejectWithValue(err.response.data);
    }
});
const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        })
            .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.detail || "Registration failed";
        });
    },
});
export default registerSlice.reducer;
