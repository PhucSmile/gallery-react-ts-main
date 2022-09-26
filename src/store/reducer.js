import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toggleModal: false,
};

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggle(state) {
            state.toggleModal = !state.toggleModal;
        },
    },
});

// Action creators are generated for each case reducer function

export const toggleActions = toggleSlice.actions;

export default toggleSlice;
