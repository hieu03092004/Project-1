import { dbFirebase } from "@/app/FireBaseConfig";
import{  equalTo, onValue,orderByChild,query,ref } from "firebase/database";
import { ISongItem } from "../interfaces/ISongItem";
export const getSongList=async(max?:number,categoryId?:string)=>{
    const songRef=ref(dbFirebase,'songs');
    let songQuery:any;
    if(!categoryId){
        songQuery=songRef;
    }
    else{
        songQuery=query(songRef,orderByChild("categoryId"),equalTo(categoryId));
    }
    const result:any[]=await new Promise((resolve)=>{
            onValue(songQuery,(snapshot)=>{
            let data:any[]=[];
            snapshot.forEach((childSnapShot)=>{
                const childKey=childSnapShot.key;
                const childData=childSnapShot.val();
                data.push({
                    id:childKey,
                    ...childData
                })
            })
            if(max){
                data=data.slice(0,3);
            }
            resolve(data);
        })
    })
    
    return result;
}
export const getSongDetail=async(id:string):Promise<ISongItem>=>{
    const songRef=ref(dbFirebase,'songs/'+id);
    const result:ISongItem=await new Promise((resolve:any)=>{
            onValue(songRef,(snapshot)=>{
            const childKey=snapshot.key;
            const childData=snapshot.val();
            if(childData){
                const data:ISongItem={
                id:childKey,
                ...childData
                }
                resolve(data);
            }
            else{
                resolve(null);
            }
            
        })
    })
    
    return result;
}
export const getSongListWishList=async(userId:string)=>{
    const songRef=ref(dbFirebase,'songs');
    let songQuery:any=query(songRef,orderByChild(`wishlist/${userId}`),equalTo(true));;
    const result:any[]=await new Promise((resolve)=>{
            onValue(songQuery,(snapshot)=>{
            let data:any[]=[];
            snapshot.forEach((childSnapShot)=>{
                const childKey=childSnapShot.key;
                const childData=childSnapShot.val();
                data.push({
                    id:childKey,
                    ...childData
                })
            })
            resolve(data);
        })
    })
    
    return result;
}