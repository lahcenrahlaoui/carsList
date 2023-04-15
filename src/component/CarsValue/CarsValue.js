import { useSelector } from "react-redux";

function CarsValue() {
    const carsTotal = useSelector(({ cars: { data, searchTerm } }) => {
        return data.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const carsValue = carsTotal.reduce((acc, b) => acc + b.cost, 0);

    return (
        <div className="car-value">
            total value : <b>{carsValue}</b> $
        </div>
    );
}

export default CarsValue;
