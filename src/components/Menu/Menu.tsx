import React, {useContext} from 'react';
import Context from "../service/context";
import {House, MenuProps, MenuItemProps} from "../../interfaces";
import MenuItem from "../MenuItem/MenuItem";
import "./Menu.css"

const Menu = ({setModalView}: MenuProps) => {
    const modalContext: House[] = useContext(Context);
    const items = modalContext.map((key: House, index: number) => {
        const {...itemProps} = key;
        return (
            <div key={index}>
                <MenuItem house = {itemProps} setModalView={setModalView}/>
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