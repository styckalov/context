import React from 'react';
import './App.css';

import Menu from '../Menu/Menu'
import Modal from "../Modal/Modal";
import HousesProvider from "../../providers/housesProvider";
import {ContextInterface} from "../../interfaces";

export const Context = React.createContext({} as ContextInterface);

const App = () => (<div>
    <HousesProvider>
        <Menu/>
        <Modal/>
    </HousesProvider>
</div>);

export default App;


