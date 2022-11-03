import React, {FC, useState} from 'react';
import style from "./Header.module.scss";
import {HeaderProps} from "./Header.props";
import {Input} from "../../components";
import {Menu} from "../../components/Menu/Menu";

const Header:FC<HeaderProps> = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    return (
        <header className={style.header}>
            <Input placeholder="Search"/>
            <Menu isOpen={isOpen} onClick={()=> setOpen(prev => !prev)}/>
        </header>
    );
};

export default Header;