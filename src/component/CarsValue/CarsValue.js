import { useSelector } from "react-redux";

function CarsValue() {
    // get the value from existing states to calculate the total cost
    const carsValue = useSelector(({ cars: { data, searchTerm } }) => {
        return data
            .filter((car) =>
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .reduce((acc, b) => acc + b.cost, 0);
    });

    return (
        <div className="car-value">
            total value : <b>{carsValue}</b> $
        </div>
    );
}

export default CarsValue;
