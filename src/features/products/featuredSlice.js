import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
const initialState = {
    products: [],
    loading: false,
    error: null,
};
// --- Fetch Featured Products ---
export const fetchFeaturedProducts = createAsyncThunk("featured/fetchFeaturedProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await api.get("/products/featured/");
        return response.data;
    }
    catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const featuredSlice = createSlice({
    name: "featured",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFeaturedProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchFeaturedProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Something went wrong";
        });
    },
});
export default featuredSlice.reducer;
