import Title from "@/app/components/title/Title"
export default function Section2(props:{lyric:string}) {
    const {lyric}=props;
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Lời bài hát" />
                <div className="bg-[#212121] p-[20px] rounded-[15px] text-white text-[14px] font-[500] whitespace-pre-line">
                    {lyric}
                </div>
            </div>
        </>
    )
}