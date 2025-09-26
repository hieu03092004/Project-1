import SongList2 from "@/app/components/song/SongList2";
import Title from "../../../components/title/Title";
import { ISongItem } from "@/app/interfaces/ISongItem";
import { getSongList } from "@/app/helpers/getSong";
export default async function Section3(props:{categoryId:string}){
    const {categoryId} =props;
    const data=await getSongList(undefined,categoryId);
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Bài hát cùng danh mục"/>
                <SongList2 data={data}/>
            </div>
        </>
    )
}