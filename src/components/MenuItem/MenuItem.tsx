import React, {useContext, useState} from 'react'

import {House} from "../../interfaces";
import './MenuItem.css';
import {Context} from "../App/App";

const MenuItem = ({id, title, price, description,  isChecked, onCheckedChange})  => (
    <div className="menu-item">
        <input type="checkbox" id={id} checked={isChecked} onChange={() => onCheckedChange(id, !isChecked)} className="menu-item__checkbox"/>
        <div className="menu-item__info">
            <div className="menu-item__title"> <p> {title} </p></div>
            <div className="menu-item__price"> <p> {price} </p></div>
            <div className="menu-item__description">
                <p>{description}</p>
            </div>
        </div>
    </div>
);

export default MenuItem
