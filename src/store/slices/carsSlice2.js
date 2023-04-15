import { createSlice, nanoid } from "@reduxjs/toolkit";

export const carsSlice2 = createSlice({
    name: "cars",
    initialState: {
        searchTerm: "",
        data: [
            { id: "id1", name: "ford", cost: 300 },
            { id: "id2", name: "toyota", cost: 700 },
            { id: "id3", name: "honda", cost: 200 },
            { id: "id4", name: "lambo", cost: 800 },
            { id: "id5", name: "clio", cost: 400 },
            { id: "id6", name: "W-V", cost: 600 },
        ],
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

export const cars2Reducer = carsSlice2.reducer;
export const { changeSearchTerm, addCar, removeCar } = carsSlice2.actions;
