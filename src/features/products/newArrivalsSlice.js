// src/features/products/newArrivalsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import {} from "./productSlice";
const initialState = {
    products: [],
    loading: false,
    error: null,
};
// Fetch new arrivals from backend
export const fetchNewArrivals = createAsyncThunk("newArrivals/fetchNewArrivals", async (_, { rejectWithValue }) => {
    try {
        const response = await api.get("/products/new-arrivals/");
        return response.data;
    }
    catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const newArrivalsSlice = createSlice({
    name: "newArrivals",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNewArrivals.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchNewArrivals.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchNewArrivals.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Something went wrong";
        });
    },
});
export default newArrivalsSlice.reducer;
