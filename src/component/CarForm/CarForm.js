import { useEffect, useState } from "react";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { addCar, changeName, changeCost } from "../../store";

function CarForm() {
    // get dispatch for redux
    const dispatch = useDispatch();

    // get states from redux
    const { name, cost } = useSelector((state) => state.form);

    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value));
    };
    const handleCostChange = (e) => {
        dispatch(changeCost(parseInt(e.target.value)));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && cost){
            dispatch(addCar({ name, cost }));
        }
        
    };

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            type="number"
                            className="input is-expanded"
                            value={cost || ""}
                            onChange={handleCostChange}
                        />
                    </div>
                </div>
                <button className="button is-link">add</button>
            </form>
        </div>
    );
}

export default CarForm;
