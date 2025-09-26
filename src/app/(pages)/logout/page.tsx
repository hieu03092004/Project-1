"use client";
import { authFirebase } from "@/app/FireBaseConfig";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
export default function LogOutPage(){
    const router=useRouter();
    useEffect(()=>{
        signOut(authFirebase).then(()=>{
            router.push("/login");
        });
    },[])
    return(
        <>
        </>
    )
}