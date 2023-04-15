import CarForm from "./component/CarForm/CarForm";
import CarSearch from "./component/CarSearch/CarSearch";
import CarList from "./component/CarList/CarList";
import CarsValue from "./component/CarsValue/CarsValue";

function App() {
    return (
        <div className="container is-fluid">
            <CarForm/>
            <CarSearch />
             <CarList/>
             <CarsValue/>
        </div>
    );
}

export default App;
