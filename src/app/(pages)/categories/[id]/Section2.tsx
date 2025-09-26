import SongList2 from "@/app/components/song/SongList2";
import Title from "../../../components/title/Title";
import { ISongItem } from "@/app/interfaces/ISongItem";
import { getSongList } from "@/app/helpers/getSong";
export default async function Section2(props:{id:string}){
    const {id,}=props;
    const data=await getSongList(undefined,id);
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách bài hát"/>
                <SongList2 data={data}/>
            </div>
        </>
    )
}