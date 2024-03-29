import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sortModified: true
};

export const sortnotesSlice = createSlice({
    name: 'preference',
    initialState,
    reducers: {
        toggleCreatedModified: (state) => {
            state.sortModified = !state.sortModified;
        }
    }
});

// console.log("Slice", sortnotesSlice);

export const { toggleCreatedModified } = sortnotesSlice.actions;
export default sortnotesSlice.reducer;