import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface ManuProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isOpen: boolean;
}