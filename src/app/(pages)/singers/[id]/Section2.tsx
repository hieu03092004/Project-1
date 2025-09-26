import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { getSongList } from "@/app/helpers/getSong";
import { ISongItem } from "@/app/interfaces/ISongItem";
export default async function Section2(props:{singerId:string}){
    const {singerId}=props;
    let data:any[]=await getSongList();
    data=data.filter((item)=>item.singerId.includes(singerId));
    console.log(data);
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách bài hát"/>
                <SongList2 data={data}/>
            </div>
        </>
    )
}