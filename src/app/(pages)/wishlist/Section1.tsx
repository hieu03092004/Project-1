"use client";
import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { getSongListWishList } from "@/app/helpers/getSong";
import { useEffect,useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authFirebase } from "@/app/FireBaseConfig";
export default function Section1(){
    const [data,setData]=useState<any>()
   useEffect(()=>{
        onAuthStateChanged(authFirebase,async (user)=>{
            if(user){
                const userId:any=user.uid;
                const dataFinal:any=await getSongListWishList(userId);
                setData(dataFinal);
            }   
        })
   },[])
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Bài hát yêu thích"/>
                {data&&(
                    <SongList2 data={data}/>
                )}
                
            </div>
        </>
    )
}