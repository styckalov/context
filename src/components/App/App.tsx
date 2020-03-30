import React, {useState} from 'react';
import './App.css';

import Menu from '../Menu/Menu'
import Modal from "../Modal/Modal";
import {ContextInterface, House} from "../../interfaces";

export const Context = React.createContext({} as ContextInterface);

const App = () => {
    const [checkedHouses, setCheckedHouses] = useState([] as House[]);
    return (
        <Context.Provider value={{
            checkedHouses,
            setCheckedHouses
        }}>
            <Menu/>
            <Modal/>
        </Context.Provider>
    )
};

export default App;


