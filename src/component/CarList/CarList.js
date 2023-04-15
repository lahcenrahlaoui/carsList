// import redux hooks
import { useDispatch, useSelector } from "react-redux";
// import actions
import { removeCar } from "../../store";

function CarList() {
    // get dispatch for redux
    const dispatch = useDispatch();

    // destructing cars , name from store with conditions
    const { cars, name } = useSelector(
        ({ form, cars: { data, searchTerm } }) => {
            const filtredCars = data.filter((car) =>
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return {
                cars: filtredCars,
                name: form.name,
            };
        }
    );

    const handleDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    // this constant to hold the mapping data around cars
    const renderedCars = cars.map((car, idx) => {
        // this bold variable to check if the item is on the data ,
        // so if the item waas in our data state already
        // bold will be true , so we can use this result in the UI later
        // and make the diplucate item looking bold
        const bold =
            name && car.name.toLowerCase().includes(name.toLowerCase());
        // this to make first letter capital
        const carName = car?.name.charAt(0).toUpperCase() + car.name.slice(1);
        return (
            <div key={car.id} className={`panel ${bold && "bold"}`}>
                <div>
                    {carName} - {car.cost}
                </div>
                <button
                    className="button is-danger"
                    onClick={() => handleDelete(car)}
                >
                    delete
                </button>
            </div>
        );
    });

    return <div className="car-list">{renderedCars}</div>;
}

export default CarList;
