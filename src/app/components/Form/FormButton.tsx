export default function FormButton(props:{
    text:string,
}){
    const {text=""}=props;
    return(
        <>
            <button type="submit" className="w-full h-[50px] rounded-[6px] text-[16px] font-[700] bg-[#00ADEF] text-white">
                {text}
            </button>
        </>
    )
}