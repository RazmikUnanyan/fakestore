import React, {FC, useState} from 'react';
import style from "./Header.module.scss";
import {ReactComponent as FilterIcon} from "../../assets/svg/filter.svg";
import {HeaderProps} from "./Header.props";
import {Button, Input, Menu, Switch, NavBar} from "../../components";

const Header: FC<HeaderProps> = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [isSun, setIsSun] = useState<boolean>(false);
    const [showFilters, setShowFilters] = useState<boolean>(false);

    return (
        <header className={style.header}>
            <div className={style.search}>
                <Input placeholder="Search"/>
                <Menu isOpen={isOpen} onClick={() => setOpen(prev => !prev)}/>
            </div>
            {isOpen && (
               <NavBar/>
            )}
            <div className={style.headerBottom}>
                <div>
                    {"computer & office > cpu"}
                </div>
                <div className={style.buttons}>
                    <Switch onClick={() => setIsSun(prev => !prev)} isSun={isSun}/>
                    <Button
                        onClick={() =>setShowFilters(prev => !prev)}
                        icon={<FilterIcon width={30}/>}
                    >
                        filter
                    </Button>
                </div>
            </div>
            {showFilters && (
                <div className={style.filters}>
                    {[...new Array(4)].map( (f, index) => (
                        <select key={index}>
                            <option value="0">filters:</option>
                            <option value="1">filter 1</option>
                            <option value="2">filter 2</option>
                            <option value="3">filter 3</option>
                            <option value="4">filter 4</option>
                        </select>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;