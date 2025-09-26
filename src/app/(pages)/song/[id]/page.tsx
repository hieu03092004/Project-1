import CardInfo from "@/app/components/card/CardInfo"
import Section2 from "./Section2"
import Section3 from "./Section3"
import { getSongDetail } from "@/app/helpers/getSong";
import { notFound } from "next/navigation";

export default async function SongDetailPage({params}:{params:{id:string}}) {
    const {id}=await params;
    const data:any=await getSongDetail(id);
    if(!data){
        notFound();
    }

    return (
        <>
            {/* Card Info */}
            <CardInfo image={data.image} title={data.title} description="" />
            {/* Lời bài hát */}
            <Section2 lyric={data.lyric}/>
            {/* Bài hát cùng danh mục */}
            <Section3 categoryId={data.categoryId}/>
        </>
    )
}