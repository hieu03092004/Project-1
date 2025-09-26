import Title from "@/app/components/title/Title";
import { ICartItem } from "@/app/interfaces/ICartItem";
import CardList from "@/app/components/card/CardList";
import { dbFirebase } from "@/app/FireBaseConfig";
import{  onValue,ref } from "firebase/database";
const getSingers=async()=>{
    const songRef=ref(dbFirebase,'singers');
    const result:any[]=await new Promise((resolve)=>{
            onValue(songRef,(snapshot)=>{
            const data:any[]=[];
            snapshot.forEach((childSnapShot)=>{
                const childKey=childSnapShot.key;
                const childData=childSnapShot.val();
                data.push({
                    id:childKey,
                    link:`/singers/${childKey}`,
                    ...childData
                })
            })
            resolve(data.slice(0,5));
        })
    })
    
    return result;
}
export default async function Section2() {
    const dataSinger: ICartItem[] = await getSingers();
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Ca sĩ nổi bật" />
                <CardList data={dataSinger} />
            </div>
        </>
    )
}