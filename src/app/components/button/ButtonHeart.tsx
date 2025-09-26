"use client";
import { authFirebase, dbFirebase } from "@/app/FireBaseConfig";
import { ISongItem } from "@/app/interfaces/ISongItem";
import { FaHeart } from "react-icons/fa6";
import { ref } from "firebase/database";
import { runTransaction } from "firebase/database";
import { useState,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
export default function ButtonHeart(props: ISongItem) {
    const [isActive,setIsActive]=useState(false);
    const {
        id = "",
        image = "",
        title = "",
        singer = "",
        listen = 0,
        audio = "",
        className = "",
        wishlist={}
    } = props;
     useEffect(()=>{
            onAuthStateChanged(authFirebase,(user)=>{
                if(user){
                    const userId=user.uid;
                    if(wishlist[userId])
                        setIsActive(true);
                }
            })
        },[])
    const handleAddWishList = () => {
        const userId = authFirebase?.currentUser?.uid;

        // console.log(id);
        // console.log(userId);
        if (id && userId) {
            const songRef = ref(dbFirebase, `/songs/${id}`);
            runTransaction(songRef, (song) => {
                if (song) {
                    if (song.wishlist && song.wishlist[userId]) {
                        song.wishlist[userId] = null;
                        setIsActive(false);
                    } else {
                        if (!song.wishlist) {
                            song.wishlist = {};
                        }
                        song.wishlist[userId] = true;
                        setIsActive(true);
                    }
                }
                return song;
            });
        }

    }
    return (
        <>
            <button className={"w-[34px] h-[34px] text-white border inline-flex items-center justify-center rounded-full ml-[10px] "+(isActive ? "border-[#00ADEF] bg-[#00ADEF]" : "border-white")} onClick={handleAddWishList}
            >
                <FaHeart />
            </button>
        </>
    )
}