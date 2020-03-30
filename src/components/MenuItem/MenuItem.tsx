import React, {useContext, useState} from 'react'

import {House} from "../../interfaces";
import './MenuItem.css';
import {Context} from "../App/App";

const MenuItem = (house: House)  => {
    const [checked, setChecked] = useState(false);
    const {checkedHouses,setCheckedHouses} = useContext(Context);
    const isSelected = (house: House) => {
        const index = checkedHouses.findIndex(({id}) => id === house.id)
        if(index === -1 && !checked) {
            setCheckedHouses(prevState => [
                ...prevState,
                house
            ])
        } else if (index > -1 && checked) {
            setCheckedHouses(prevState => [
            ...prevState.slice(0, index),
            ...prevState.slice(index + 1)
            ])
        }
    };
    return (
        <div className="menu-item">
            <input type="checkbox" id={house.id} checked={checked} onChange={() => {
                setChecked(() => !checked);
                isSelected(house)
            }} className="menu-item__checkbox"/>
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
