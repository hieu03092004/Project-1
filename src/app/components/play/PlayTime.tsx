"use client";
export default function PlayTime() {
    const handleChange=(event:any)=>{
        const boxPlayTime:any=document.querySelector(".box-play-time");
        const boxPlayTimeTotal=boxPlayTime?.querySelector(".inner-total");
        const elementPlayAudio:any=document.querySelector(".play-audio");
        const elementAudio=elementPlayAudio.querySelector(".inner-audio");
        elementAudio.currentTime=parseFloat(boxPlayTimeTotal.value);
    }
    return (
        <>
            <div className="mt-[11px] relative box-play-time">
                <div className="bg-[#00ADEF] w-[0] absolute top-[14px] left-[0] h-[4px] inner-current">
                </div>
                <input type="range" min={0} max={0} defaultValue={0} className="w-full h-[4px] range-sm inner-total" onChange={handleChange}/>
            </div>
        </>
    )
}