import React, {useContext} from 'react';

import Context from "../service/context";
import './Modal.css';
import {modalProps} from '../../interfaces';
const Modal = ({setModalView, modalView}: modalProps) => {

    return (
        <div className={
            modalView ? "modal__wrapper__visible" : "modal__wrapper__hidden"
        }>
            <div className="modal__header">
                <div onClick={() => setModalView(!modalView)} className="modal__cross">
                    ×
                </div>
            </div>
        </div>
    )
};

export default Modal;
