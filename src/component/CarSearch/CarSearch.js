import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { changeSearchTerm  } from "../../store";

import styled from "styled-components";

function CarSearch() {
    const dispatch = useDispatch();
    

    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    });

    const handleSearchTermChange = (e) => { 
        dispatch(changeSearchTerm(e.target.value));
        
    };
    const handleClick = (e) => { 
        
    };

    // useEffect(() => {
    //     dispatch(searchedCar(cars));
    //     // handleFastSearch();
    // }, [cars, carSearch]);

    return (
        <div className="list-header">
            <h3 className="title is-3"> cars </h3>
            <div className="search field is-horizontal"></div>
            <div>
                <label className="label"> search </label>
                <input
                    className="input is-small"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </div>

        </div>
    );
}

const FormSearch = styled.div`
    display: flex;
    justify-content: center;

    input {
        border: 1px solid #72db3a;
        padding: 0.5rem;
        margin: 0.2rem;
    }
    button {
        cursor: pointer;
        border: none;
        background: #60db3a;

        padding: 0.5rem;
        margin: 0.2rem;

        width: 8rem;
    }
`;

export default CarSearch;
