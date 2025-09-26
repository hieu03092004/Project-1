"use client"
import { ISongItem } from "@/app/interfaces/ISongItem";
import { FaPlay } from "react-icons/fa6";
export default function ButtonPlay(props:ISongItem){
    const {
        id="",
        image="",
        title="",
        singer="",
        listen=0,
        audio="",
        className=""
    }=props;
    const handlePlay=()=>{
        const elementPlayAudio:any=document.querySelector(".play-audio");
        if (elementPlayAudio) {
            elementPlayAudio.setAttribute("song-id",id);
            const elementAudio=elementPlayAudio.querySelector(".inner-audio");
            const elementSource=elementAudio.querySelector(".inner-source");
            elementSource.src=audio;
            elementAudio.load();
            elementAudio.play();
            elementPlayAudio.classList.remove("hidden");
            //Lay ra tong thoi gian
            const boxPlayTime:any=document.querySelector(".box-play-time");
            const boxPlayTimeTotal=boxPlayTime?.querySelector(".inner-total");
            const boxPlayTimeCurrent=boxPlayTime?.querySelector(".inner-current");
            elementAudio.onloadedmetadata=()=>{
                const totalTime=elementAudio.duration;
                boxPlayTimeTotal.max=totalTime;

                // console.log(totalTime);
                //lay ra thoi gian hien tai
                elementAudio.ontimeupdate=()=>{
                    const currentTime:any=elementAudio.currentTime;
                    boxPlayTimeTotal.value=currentTime;
                    const percent=currentTime*100/totalTime;
                    boxPlayTimeCurrent.style.width=`${percent}%`;
                    // console.log(currentTime);
                }   
                

            };
            //Hiển thị ảnh
            const elementImage=elementPlayAudio.querySelector(".inner-image");
            const elementTitle=elementPlayAudio.querySelector(".inner-title");
            elementImage.src=image;
            elementImage.alt=title;
            elementTitle.innerHTML=title;
            const boxButtonPlay=document.querySelector(".box-button-play");
            if(boxButtonPlay){
                boxButtonPlay.classList.add("play");
            }
        }
    }
    return(
        <>
            <button className={`${className} cursor-pointer`} onClick={handlePlay} button-play="">
                <FaPlay />
            </button>
        </>
    )
}