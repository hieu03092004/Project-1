import { ICartItem } from '@/app/interfaces/ICartItem'
import Link from 'next/link'
export default function CartItem(props:ICartItem){
    const {
        link="",
        image="",
        title="",
        description=""}=props;
    return(
        <>
            <div className="">
                <Link href={link}>
                    <div className="w-full aspect-square rounded-[15px] mb-[10px]">
                        <img src={image} alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="font-[700] text-[14px] text-white mb-[10px] line-clamp-1">
                       {title}
                    </div>
                    <div className='font-[400] text-[12px] text-[#FFFFFF80] line-clamp-1'>
                        {description}
                    </div>
                </Link>
            </div>
        </>
    )
}