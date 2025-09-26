"use client";
import { FaBackwardStep,FaPlay,FaForwardStep, FaPause } from "react-icons/fa6";
export default function PlayActions() {
    const handlePlay=()=>{
        const elementPlayAudio:any=document.querySelector(".play-audio");
        const elementAudio=elementPlayAudio.querySelector(".inner-audio");
        const boxButtonPlay:any= elementPlayAudio.querySelector(".box-button-play");
        if(boxButtonPlay.classList.contains("play")){
            boxButtonPlay.classList.remove("play");
            elementAudio.pause();
        }
        else{
            boxButtonPlay.classList.add("play");
            elementAudio.play();
        }
        
    }
    const handleNextPrev=(action:string)=>{
        console.log(action);
        const elementPlayAudio:any=document.querySelector(".play-audio");
        const idSongCurrent=elementPlayAudio.getAttribute("song-id");
        const elementSongCurrent:any=document.querySelector(`[song-list] [song-id='${idSongCurrent}']`);
        if(elementSongCurrent){
            switch(action){
                case("next"):
                    const elementSongNext=elementSongCurrent.nextElementSibling;
                    if(elementSongNext){
                        const buttonPlay:any=elementSongNext.querySelector("button[button-play]");
                        buttonPlay.click();
                    }

                    break;
                case("prev"):
                    const elementSongPrev=elementSongCurrent.previousElementSibling;
                    if(elementSongPrev){
                        const buttonPlay:any=elementSongPrev.querySelector("button[button-play]");
                        buttonPlay.click();
                    }
                    break;
                default:
                    break;
            }
        }

    } 
    return (
        <>
            <div className="flex items-center justify-center">
                <button className="text-white text-[16px] cursor-pointer" onClick={()=>handleNextPrev("prev")}><FaBackwardStep /></button>
                <button className="text-white text-[16px] w-[32px] h-[32px] bg-[#00ADEF] rounded-full inline-flex items-center justify-center mx-[42px] box-button-play play cursor-pointer" onClick={handlePlay}>
                    <FaPlay className="inner-icon-play" />
                    <FaPause className="inner-icon-pause" />
                </button>
                <button className="text-white text-[16px] cursor-pointer" onClick={()=>handleNextPrev("next")}><FaForwardStep /></button>
            </div>
        </>
    )
}