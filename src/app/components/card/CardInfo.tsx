export default function CardInfo(props:{image:string,title:string,description:string}){
    const {
        image="",
        title="",
        description="",

    }=props
    return(
        <>
            <div className="flex items-center mt-[30px]">
                <div className="w-[180px] aspect-square rounded-[15px] truncate">
                    <img src={image} alt="ảnh ca sĩ" className="w-full h-full object-cover"/>
                </div>
                <div className="flex-1 ml-[20px]">
                    <h1 className="font-[700] text-[35px] text-[#00ADEF]">{title}</h1>
                    <div className="text-[14px] font-[400] mt-[10px] text-[#EFEEE0]">
                       {description}
                    </div>
                </div>
            </div>
        </>
    )
}