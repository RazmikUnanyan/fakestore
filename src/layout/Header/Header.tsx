import React, {FC, useState} from 'react';
import style from "./Header.module.scss";
import {ReactComponent as FilterIcon} from "../../assets/svg/filter.svg";
import {HeaderProps} from "./Header.props";
import {Button, Input, Menu, Switch} from "../../components";
import {NavBarProps} from "../NavBar/NavBar.props";
import NavBar from "../NavBar/NavBar";

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
                    filters
                </div>
            )}
        </header>
    );
};

export default Header;