import { ISongItem } from "@/app/interfaces/ISongItem";
import { FaPlay,FaRegHeart } from "react-icons/fa6";
import ButtonPlay from "../button/ButtonPlay";
import Link from "next/link";
export default function SongItem2(props:{data:ISongItem}){
    const {data}=props;
    return(
        <>
            <div className="bg-[#212121] flex items-center justify-between py-[10px] px-[18px] rounded-[15px]">
                <div className="w-[40%] flex items-center">
                    <ButtonPlay {...data}  className="text-white text-[24px]"/>
                    <div className="mx-[12px] rounded-[8px] w-[42px] h-[42px] aspect-square truncate ">
                        <img src={data.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="font-[700] text-[14px] text-white">
                        <Link href={`/song/${data.id}`}>{data.title}</Link>
                        
                    </div>
                </div>
                <div className="w-[30%] text-center font-[400] text-[14px] text-white">
                    {data.singer}
                </div>
                <div className="w-[30%] flex items-center justify-end gap-[18px] text-white">
                    <div className="">
                        {data.time}
                    </div>
                    <div className="text-[20px] ">
                        <FaRegHeart />
                    </div>
                </div>
            </div>
        </>
    )
}