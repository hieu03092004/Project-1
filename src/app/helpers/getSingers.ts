import { dbFirebase } from "@/app/FireBaseConfig";
import{  onValue,ref } from "firebase/database";
export const getSingers=async(max?:number)=>{
    const singerRef=ref(dbFirebase,'singers');
    const result:any[]=await new Promise((resolve)=>{
            onValue(singerRef,(snapshot)=>{
            let data:any[]=[];
            snapshot.forEach((childSnapShot)=>{
                const childKey=childSnapShot.key;
                const childData=childSnapShot.val();
                data.push({
                    id:childKey,
                    link:`/singers/${childKey}`,
                    ...childData
                })
            })
            if(max){
                data=data.slice(0,max);
            }
            resolve(data);
        })
    })
    
    return result;
}
export const getSingersDetail = async (id: string):Promise<any> => {
    const songRef = ref(dbFirebase, 'singers/' + id);
    const result:any = await new Promise((resolve) => {
        onValue(songRef, (snapshot) => {
            const childKey = snapshot.key;
            const childData = snapshot.val();
            const data: any = {
                id: childKey,
                ...childData,
            };
            resolve(data);
        });
    });
    
    return result;
}