import BannerHome from "@/app/components/Banner/BannerHome";
import Title from "@/app/components/title/Title";
import { ISongItem } from "@/app/interfaces/ISongItem";
import SongList from "@/app/components/song/SongList";
import { getSongList } from "@/app/helpers/getSong";
export default async function Section1() {
    const dataSongList:ISongItem[]=await getSongList(3);
    // console.log(dataSongList);
    return (
        <>
            <div className="flex mt-[30px]">
                <div className="w-[534px]">
                    <BannerHome />
                </div>
                <div className="flex-1 ml-[20px] ">
                    <Title text="Nghe nhiều" />
                    <SongList data={dataSongList} />
                </div>
            </div>
        </>
    )
}