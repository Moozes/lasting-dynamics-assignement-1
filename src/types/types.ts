import { HTMLProps } from "react";

export type DivProps = HTMLProps<HTMLDivElement>

export type TUser = {
    id: string; 
    email: string;
    password: string;
}