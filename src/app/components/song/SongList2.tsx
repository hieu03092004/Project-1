import { ISongItem } from "@/app/interfaces/ISongItem";
import SongItem2 from "./SongItem2";

export default function SongList2(props:{data:ISongItem[]}){
    const {data}=props;
    return (
        <>
           <div className="grid grid-cols-1 gap-[10px]">
                {data.map((item,index)=>{
                    return(
                        <SongItem2 key={index} data={item}/>
                    )
                })}
           </div>
        </>
    )
}