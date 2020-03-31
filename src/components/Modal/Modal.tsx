import React, {useContext} from 'react';

import './Modal.css';
import classNames from "classnames";
import {HousesContext} from '../../providers/housesProvider'

const Modal = () => {
    const {houses, clearSelectedHouses} = useContext(HousesContext);

    const checkedHouses = houses.filter((house) => house.isChecked);

    const modalClass = classNames({
        "modal__wrapper__visible": checkedHouses.length,
        "modal__wrapper__hidden": !checkedHouses.length
    });
    return (
        <div className={modalClass}>
            <div className="modal__header">
                <div onClick={clearSelectedHouses} className="modal__cross">
                    ×
                </div>
                <h1>You have chose {
                    checkedHouses.length === 1 ? checkedHouses[0].title : `${checkedHouses.length} positions`
                }</h1>
            </div>
        </div>
    )
};

export default Modal;
