import { configureStore } from "@reduxjs/toolkit";

// import the reducers from slices
import { cars2Reducer } from "./slices/carsSlice2";
import { formReducer } from "./slices/formSlice";

// configure the store
const store = configureStore({
    reducer: {
        cars: cars2Reducer,
        form: formReducer,
    },
});

export { store };

// re-export all action from thier own slices
export { addCar, removeCar, changeSearchTerm } from "./slices/carsSlice2";
export { changeName, changeCost } from "./slices/formSlice";
