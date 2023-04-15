// import { configureStore } from "@reduxjs/toolkit";

// import { carsReducer } from "./slices/carsSlice";
// import { searchedCarsReducer } from "./slices/searchedCarsSlice";

// const store = configureStore({
//     reducer: {
//         cars: carsReducer,
//         searchedCars: searchedCarsReducer,
//     },
// });

// export { store };

// export { addCar, removeCar, changeStatus } from "./slices/carsSlice";

// export { searchedCar } from "./slices/searchedCarsSlice";

import { configureStore } from "@reduxjs/toolkit";

import { cars2Reducer } from "./slices/carsSlice2";
import { formReducer } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: cars2Reducer,
        form: formReducer,
    },
});

// const store = configureStore({
//     reducer: {
//         cars: cars2Reducer,
//         form: formReducer,
//     },
// });

export { store };

export { addCar, removeCar, changeSearchTerm  } from "./slices/carsSlice2";

export {  changeName , changeCost } from "./slices/formSlice";
