import React from 'react';

import {House} from "../../interfaces";
import MenuItem from "../MenuItem/MenuItem";
import {HousesContext} from '../../providers/housesProvider'

import "./Menu.css"

const Menu = () => {
    const {houses, onSelectedHouseChange} = useContext(HousesContext);

    const items = houses.map((house: House) => {
        return (
            <div key={house.id}>
                <MenuItem {...house} onCheckedChange={onSelectedHouseChange}/>
            </div>
        )
    });
    return (
        <div className="menu__list">
            {items}
        </div>
    )

};

export default Menu