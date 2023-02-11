import { HTMLProps } from "react";

export type DivProps = HTMLProps<HTMLDivElement>

export type TUser = {
    id: string; 
    email: string;
    password: string;
}

export type TProcess = {
    id: string;
    text: string;
    controls: boolean;
    isPrivate: boolean;
    icon: string;
    bgColor: string
}