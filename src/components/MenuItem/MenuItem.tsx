import React from 'react'

import {MenuItemProps} from "../../interfaces";
import './MenuItem.css';

const MenuItem = ({house, setModalView}: MenuItemProps ) => {
    return (
        <div className="menu-item">
            <input type="checkbox" className="menu-item__checkbox"/>
            <div className="menu-item__info">
                <div className="menu-item__title"> <p> {house.title} </p></div>
                <div className="menu-item__price"> <p> {house.price} </p></div>
                <div className="menu-item__description">
                    <p>{house.description}</p>
                </div>
            </div>
        </div>
    )
};

export default MenuItem
