import CardInfo from "@/app/components/card/CardInfo"
import { ICartInfo } from "@/app/interfaces/ICartInfo"
import Section2 from "./Section2"
import { getCategoriesDetail } from "@/app/helpers/getCategories";
export default async function SongsByCategoryPage({params}:{params:{id:string}}){
    const {id} = await params;
    const data:ICartInfo=await getCategoriesDetail(id);
    return(
        <>
            <CardInfo title={data.title} image={data.image} description="" />
            <Section2 id={id}/>
        </>
    )
}