import React from 'react';
import {House} from "../../interfaces";
import MenuItem from "../MenuItem/MenuItem";
import "./Menu.css"
import houses from '../../data'

const Menu = () => {
    const items = houses.map((key: House) => {
        const {...itemProps} = key;
        return (
            <div key={key.id}>
                <MenuItem {...itemProps}/>
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