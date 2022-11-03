import React, {FC} from 'react';
import style from './Input.module.scss'
import {InputProps} from "./Input.props";

export const Input:FC<InputProps>= ({...props}) => {
    return (
        <input className={style.input} {...props}/>
    );
};