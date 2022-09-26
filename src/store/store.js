import { configureStore } from '@reduxjs/toolkit';
import toggleSlice from './reducer';

const store = configureStore({
    reducer: {
        toggle: toggleSlice.reducer,
    },
});

export default store;
