'use client'
import { authFirebase } from "@/app/FireBaseConfig";
import { IMenuLink } from "@/app/interfaces/IMenuLink";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link"
import { useEffect, useState } from "react";
import { FaHeart, FaHouse, FaMusic, FaPodcast, FaUser, FaUserPlus,FaArrowRightFromBracket } from "react-icons/fa6";
import SiderMenuItem from "./SiderMenuItem";
export default function SiderMenu(){
    const [isLogin,setIsLogin]=useState<boolean>();
    useEffect(()=>{
        onAuthStateChanged(authFirebase,(user)=>{
            if(user){
                setIsLogin(true);
            }
            else{
                setIsLogin(false);
            }
        })
    },[])
    
    const menu:IMenuLink[]=[
        {
            icon:<FaHouse />,
            title:"Trang chủ",
            link:"/",
        },
        {
            icon:<FaMusic />,
            title:"Danh mục bài hát",
            link:"/categories",
        },
        {
            icon:<FaPodcast />,
            title:"Ca sĩ",
            link:"/singers",
        },
        {
            icon:<FaHeart />,
            title:"Bài hát yêu thích",
            link:"/wishlist",
            logged:true
        },
         {
            icon:<FaArrowRightFromBracket />,
            title:"Đăng xuất",
            link:"/logout",
            logged:true
        },
        {
            icon:<FaUser />,
            title:"Đăng nhập",
            link:"/login",
            logged:false
        },
        {
            icon:<FaUserPlus />,
            title:"Đăng ký",
            link:"/register",
            logged:false
        },
    ]
    return(
        <>
            <nav className="py-[30px] px-[20px]">
                <ul>
                    {menu.map((item,index)=>{
                        return(
                            <SiderMenuItem key={index} item={item} isShow={item.logged===undefined || item.logged===isLogin ? true : false}/>
                        )
                    })}
                    
                </ul>
            </nav>
        </>
    )
}