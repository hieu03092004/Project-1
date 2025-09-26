import { dbFirebase } from "@/app/FireBaseConfig";
import{  onValue,ref } from "firebase/database";
import { ICartInfo } from "../interfaces/ICartInfo";
export const getCategories=async(max?:number)=>{
    const songRef=ref(dbFirebase,'categories');
    const result:any[]=await new Promise((resolve)=>{
            onValue(songRef,(snapshot)=>{
            let data:any[]=[];
            snapshot.forEach((childSnapShot)=>{
                const childKey=childSnapShot.key;
                const childData=childSnapShot.val();
                data.push({
                    id:childKey,
                    link:`/categories/${childKey}`,
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
export const getCategoriesDetail = async (id: string): Promise<ICartInfo> => {
    const songRef = ref(dbFirebase, 'categories/' + id);
    const result: ICartInfo = await new Promise((resolve) => {
        onValue(songRef, (snapshot) => {
            const childKey = snapshot.key;
            const childData = snapshot.val();
            const data: ICartInfo = {
                id: childKey,
                ...childData,
            };
            resolve(data);
        });
    });
    
    return result;
}