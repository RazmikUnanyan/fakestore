import React, {FC} from 'react';
import style from './Switch.module.scss'
import {ReactComponent as SunIcon} from "../../assets/svg/sun.svg";
import {ReactComponent as MoonIcon} from "../../assets/svg/moon.svg";
import {SwitchProps} from "./Switch.props";
import {Input} from "../Input/Input";

export const Switch: FC<SwitchProps> = ({isSun, ...props}) => (
    <>
        <Input {...props} type="checkbox" className={style.checkbox} id="checkbox"/>
        <label htmlFor="checkbox" className={style.label}>
            <div className={style.ball}>
                {!isSun ? <SunIcon/> : <MoonIcon/>}
            </div>
        </label>
    </>
);