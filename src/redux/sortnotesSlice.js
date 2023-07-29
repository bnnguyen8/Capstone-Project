import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sortModified: true,
    lightTemplate: true
};

export const sortnotesSlice = createSlice({
    name: 'sortnotes',
    initialState,
    reducers: {
        toggleCreatedModified: (state) => {
            state.sortModified = !state.sortModified;
        },
        togglelightTemplate: (state) => {
            state.lightTemplate = !state.lightTemplate;
        }
    }
});


export const { toggleCreatedModified, togglelightTemplate } = sortnotesSlice.actions;
export default sortnotesSlice.reducer;