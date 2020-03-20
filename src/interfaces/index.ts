export interface modalProps {
    setModalView: (flag: boolean) => void;
    modalView: boolean;
}
export interface House {
    title: string,
    price: string,
    description: string
}
export interface MenuItemProps {
    house: House,
    setModalView: (flag: boolean) => void;
}
export interface MenuProps {
    setModalView: (flag: boolean) => void;
}