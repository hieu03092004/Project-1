
import PlayAudio from "./PlayAudio";
import PlayInfo from "./PlayInfo";
import PlayActions from "./PlayActions";
import PlayTime from "./PlayTime";
import PlayVolumne from "./PlayVolume";
export default function Play(){
    return(
        <>
            <div className="bg-[#212121] fixed bottom-0 left-0 w-full border-t border-[#494949] z[-900] py-[20px] play-audio hidden">
               <PlayAudio/>
                <div className="container mx-auto flex items-center justify-between">
                    <PlayInfo/>
                    <div className="flex-1 mx-[67px]">
                        <PlayActions/>
                        <PlayTime/>
                    </div>
                    <PlayVolumne/>
                </div>
            </div>
            
        </>
    )
}