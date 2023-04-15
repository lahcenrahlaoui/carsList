import { createSlice, nanoid } from "@reduxjs/toolkit";

// initial this data for testing
const initData = [
    { id: "id1", name: "ford", cost: 300 },
    { id: "id2", name: "toyota", cost: 700 },
    { id: "id3", name: "honda", cost: 200 },
    { id: "id4", name: "lambo", cost: 800 },
    { id: "id5", name: "clio", cost: 400 },
    { id: "id6", name: "W-V", cost: 600 },
];
/*  **********
        this slice has 
           
            * states 
                * searchTerm  , we use this state for input search 
                * data  , we use this state for stocking our data 
            * reducers 
                * changeSearchTerm to controle the searchTermState 
                * addCar for stocking values comming from inputs in the data state
                * removeCar to remove cars for the data state  

        **********
    */
export const carsSlice2 = createSlice({
    name: "cars",
    initialState: {
        searchTerm: "",
        data: initData,
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },
        removeCar(state, action) {
            const updated = state.data.filter(
                (car) => car.id !== action.payload
            );
            state.data = updated;
        },
    },
});

// export the reducer from the slice 
export const cars2Reducer = carsSlice2.reducer;
// export actions 
export const { changeSearchTerm, addCar, removeCar } = carsSlice2.actions;
