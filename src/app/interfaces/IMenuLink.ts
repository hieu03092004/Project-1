import { ReactNode } from "react";
export interface IMenuLink {
    icon: ReactNode;
    title: string,
    link: string,
    logged?:boolean,
}