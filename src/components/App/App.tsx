import React, {useState} from 'react';
import './App.css';

import Menu from '../Menu/Menu'
import Modal from "../Modal/Modal";
import Context from '../service/context';
import mockData from "../../data";

const App = () => {
    const [modalView, setModalView] = useState(false);
    return (
        <Context.Provider value={mockData}>
            <div className="App">
                <Menu setModalView={setModalView}/>
                <Modal modalView={modalView} setModalView={setModalView}/>
            </div>
        </Context.Provider>
    );
};

export default App;
