import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sortModified: true,
    lightTemplate: true,
    allowDeleted: true
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
        ,
        toggleallowDeleted: (state) => {
            state.allowDeleted = !state.allowDeleted;
        }
    }
});


export const { toggleCreatedModified, togglelightTemplate, toggleallowDeleted } = sortnotesSlice.actions;
export default sortnotesSlice.reducer;