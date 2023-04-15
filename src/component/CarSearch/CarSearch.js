import { useDispatch, useSelector } from "react-redux";

import { changeSearchTerm } from "../../store";

function CarSearch() {
    const dispatch = useDispatch();

    // destructing states from store using useSelector
    // state.form.name , state.form.cost
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    });

    const handleSearchTermChange = (e) => {
        dispatch(changeSearchTerm(e.target.value));
    };

    return (
        <div className="list-header">
            <h3 className="title is-3"> Cars </h3>
            <div className="search field is-horizontal"></div>
            <div className="field">
                <input
                    className="input is-large"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </div>
        </div>
    );
}

export default CarSearch;
