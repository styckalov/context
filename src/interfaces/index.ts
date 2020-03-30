import React from 'react'

export interface House {
    id: string,
    title: string,
    price: string,
    description: string
}
export interface  ContextInterface {
    checkedHouses: House[],
    setCheckedHouses: React.Dispatch<React.SetStateAction<House[]>>
}

export interface menuItemProps {
    house: House,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>,
    checked: boolean
}