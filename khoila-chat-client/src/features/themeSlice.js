import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themeKey: true, // true for light theme, false for dark theme
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.themeKey = !state.themeKey;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;