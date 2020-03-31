import React, {useState} from 'react';
import './App.css';

import {ContextInterface, House} from "../../interfaces";
import HOUSES from '../../data'

export const HousesContext = React.createContext({} as ContextInterface);

const HousesProvider = ({children}) => {
    const [checkedHouseIds, setCheckedHouseIds] = useState(new Set());

    const onSelectedHouseChange = (houseId, isChecked) => {
        if (isChecked) checkedHouseIds.add(houseId);
        else checkedHouseIds.delete(houseId);
        setCheckedHouseIds(new Set(checkedHouseIds));
    };

    const clearSelectedHouses = () => {
        setCheckedHouseIds(new Set());
    };

    const houses = HOUSES.map((house) => ({
        ...house,
        isChecked: checkedHouseIds.has(house.id)
    }));

    return (
        <HousesContext.Provider value={{
            houses,
            onSelectedHouseChange,
            clearSelectedHouses
        }}>
            {children}
        </HousesContext.Provider>
    )
};

export default HousesProvider;
