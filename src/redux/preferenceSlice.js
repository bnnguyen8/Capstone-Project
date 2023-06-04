import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allowDelete: true
};

export const preferenceSlice = createSlice({
    name: 'preference',
    initialState,
    reducers: {
        toggleAllowDelete: (state) => {
            state.allowDelete = !state.allowDelete;
        }
    }
});

// console.log("Slice", preferenceSlice);

export const { toggleAllowDelete } = preferenceSlice.actions;
export default preferenceSlice.reducer;