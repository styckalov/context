import React, {useContext} from 'react';

import './Modal.css';
import classNames from "classnames";
import {Context} from "../App/App";

const Modal = () => {
    const {checkedHouses, setCheckedHouses} = useContext(Context);
    const modalClass = classNames({
        "modal__wrapper__visible": checkedHouses.length,
        "modal__wrapper__hidden": !checkedHouses.length
    });
    return (
        <div className={modalClass}>
            <div className="modal__header">
                <div onClick={() => {
                    setCheckedHouses([])
                }} className="modal__cross">
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
