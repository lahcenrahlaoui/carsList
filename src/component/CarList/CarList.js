import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../../store";
function CarList() {
    // get dispatch for redux
    const dispatch = useDispatch();

    // get states from redux

    const carss = useSelector(({ form, cars: { data, searchTerm } }) => {
        return { data };
    });

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

    const renderedCars = cars.map((car, idx) => {
        const bold =
            name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <div>
                    {car.name} - {car.cost}
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

    return (
        <div className="car-list">
            {/* <NavCenter className="card"> */}
            {renderedCars}
            {/* </NavCenter> */}
        </div>
    );
}
const NavCenter = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CarItem = styled.div`
    display: flex;
    background: #a0cfa0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 0.5rem;
    width: 38.5%;
    button {
        background: #f17c7cc1;
        border: none;
        width: 1.5rem;
        height: 1.5rem;
        &:hover {
            background: #f03939c1;
        }
    }
`;

export default CarList;
