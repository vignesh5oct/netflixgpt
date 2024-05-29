import { createSlice } from "@reduxjs/toolkit";

const demoSlice = createSlice({
    name: "demo",
    initialState: {
        addDemo: null,
        deleteDemo: null,
    },
    reducers: {
        addDemoFeature: (state, action) => {
            state.addDemo = action.payload;
        }
    }
});

export const { addDemoFeature } = demoSlice.actions;
export default demoSlice.reducer;