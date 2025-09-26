import CardInfo from "@/app/components/card/CardInfo";
import { ICartInfo } from "@/app/interfaces/ICartInfo";
import  {getSingersDetail} from "@/app/helpers/getSingers";
import Section2 from "./Section2";
export default async function SingerDetailPage({params}:{params:{id:string}}){
    const {id}=await params;
    const data:any=await getSingersDetail(id);
    console.log(data);
    return(
        <>
             <CardInfo image={data.image} title={data.title} description={data.description} />
             <Section2 singerId={id}/>
        </>
    )
}