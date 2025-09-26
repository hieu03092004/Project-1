import { ICartItem } from "@/app/interfaces/ICartItem";
import CartItem from "./CartItem";

export default function CardList(props:{data:ICartItem[]}){
    const {data}=props;
    return(
        <>
            <div className="grid grid-cols-5 gap-[20px]">
                {data.map((item,index)=>{
                    return(
                        <CartItem key={index} image={item.image} link={item.link} title={item.title} description={item.description}/>
                    )
                })}
            </div>
        </>
    )
}