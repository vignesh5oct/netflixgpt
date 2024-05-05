import { createSlice } from "@reduxjs/toolkit";


const functionalitySlice = createSlice({
    name: "functionality",
    initialState: {
        showSearch: false,
        showMenu: null,
    },
    reducers: {
        toggleShowSearch: (state) => {
            state.showSearch = !state.showSearch
        },
        toggleMenu: (state, action) => {
            state.showMenu = action.payload;
        }
    },
});


export const { toggleShowSearch, toggleMenu } = functionalitySlice.actions;
export default functionalitySlice.reducer;

