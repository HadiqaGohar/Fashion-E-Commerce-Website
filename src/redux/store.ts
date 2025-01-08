// import { configureStore } from "@reduxjs/toolkit";
// import cartSliceReducer from './slices/cartSlice'


// export const store = configureStore({
//     reducer: {
//         cart: cartSliceReducer,
//     },
//     devTools: process.env.NODE_ENV !== 'production'
// })


import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './slices/cartSlice'

// Configure the Redux store
export const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

// Define the RootState type for your Redux store
export type RootState = ReturnType<typeof store.getState>; // Inferred type from the store's state

// Optionally export the dispatch type as well
export type AppDispatch = typeof store.dispatch;
