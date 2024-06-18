import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    primary?: boolean,
    secondary?: boolean,
    success?: boolean,
    danger?: boolean,
    warning?: boolean,
    outline?: boolean 
    rounded?: boolean,
}