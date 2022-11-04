import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface SwitchProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    theme: "light" | "dark"
}