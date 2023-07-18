import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sortModified: true
};

export const sortnotesSlice = createSlice({
    name: 'sortnotes',
    initialState,
    reducers: {
        toggleCreatedModified: (state) => {
            state.sortModified = !state.sortModified;
        }
    }
});


export const { toggleCreatedModified } = sortnotesSlice.actions;
export default sortnotesSlice.reducer;