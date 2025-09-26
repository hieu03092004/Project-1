import SongItem from "@/app/components/song/SongItem";
import { ISongItem } from "@/app/interfaces/ISongItem";
export default function SongList(props: {
    data: ISongItem[]
}) {
    const { data } = props;
    return (
        <>
            <div className="grid grid-cols-1 gap-[12px]" song-list="">
                {data.map((item, index) => {
                    return (
                        <SongItem id={item.id} key={index} image={item.image} title={item.title} singer={item.singer} listen={item.listen} audio={item.audio} wishlist={item.wishlist}/>
                    )
                })}
            </div>
        </>
    )
}