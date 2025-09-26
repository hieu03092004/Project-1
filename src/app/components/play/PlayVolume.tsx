"use client";
import {FaVolumeHigh } from "react-icons/fa6";
export default function PlayVolumne() {
    const handleChange=()=>{
        const boxVolume:any=document.querySelector(".box-volume")
        const boxVolumeTotal=boxVolume?.querySelector(".inner-total");
        const elementPlayAudio:any=document.querySelector(".play-audio");
        const elementAudio=elementPlayAudio.querySelector(".inner-audio");
        elementAudio.volume=parseFloat(boxVolumeTotal.value)/100;
        const boxVolumeCurrent=boxVolume?.querySelector(".inner-current");
        boxVolumeCurrent.style.width=`${boxVolumeTotal.value}%`;
    }
    return (
        <>
            <div className="w-[184px] flex items-end box-volume">
                <button className="text-white text-[16px] inner-button">
                    <FaVolumeHigh />
                </button>
                <div className="ml-[6px] relative ">
                    <div className="bg-[#00ADEF] w-[100%] absolute top-[14px] left-[0] h-[3px] inner-current">
                    </div>
                    <input type="range" min={0} max={100} defaultValue={100} className="w-full h-[3px] range-sm inner-total" onChange={handleChange}/>
                </div>

            </div>
        </>
    )
}