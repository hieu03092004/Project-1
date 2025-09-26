import { Url } from "next/dist/shared/lib/router/router";

export interface ICartItem{
    image:string,
    title:string,
    description:string,
    link:Url,
}