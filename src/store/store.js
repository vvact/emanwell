import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice";
import loginReducer from "../features/auth/loginSlice";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import categoryReducer from "../features/categories/categorySlice";
import newArrivalsReducer from "../features/products/newArrivalsSlice";
import featuredReducer from "../features/products/featuredSlice";
// Add more reducers as you create them, e.g., authReducer, productReducer, cartReducer
export const store = configureStore({
    reducer: {
        register: registerReducer,
        // auth: authReducer,
        // products: productReducer,
        // cart: cartReducer,
        auth: loginReducer,
        products: productReducer,
        cart: cartReducer,
        categories: categoryReducer,
        newArrivals: newArrivalsReducer,
        featured: featuredReducer,
    },
});
