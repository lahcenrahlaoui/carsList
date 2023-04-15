import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice2";

/*  *******

    this slice hase 

        * states
            * name to update the name field in the form 
            * cost to update the name cost in the form 
        * reducers 
            * changeName to change the name state 
            * changeCost to change the cost state 
        * extraReducer to reset the form when trigger an action 'cars/addCar'

    *******
*/
export const formSlice = createSlice({
    name: "cars",
    initialState: {
        name: "",
        cost: 0,
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = "";
            state.cost = 0;
        });
    },
});

// export the reducer from the slice
export const formReducer = formSlice.reducer;
// export actions
export const { changeName, changeCost } = formSlice.actions;
