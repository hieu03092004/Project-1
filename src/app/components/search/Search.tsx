'use client';
import { useRouter } from 'next/navigation'
import { FaMagnifyingGlass} from "react-icons/fa6";
import { useSearchParams } from 'next/navigation'
export default function Search(){
    const searchParams = useSearchParams();
    const keywordDefault = searchParams.get('search') || "";
    const router = useRouter();
    const handelSearch=((event:any)=>{
        event.preventDefault();
        const keyword:string=event.target.keyword.value;
        if(keyword){
            router.push(`/search?keyword=${keyword}`);
        }

    })
    return(
        <>  
            <form className="bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] z-[900] py-[15px] px-[30px] flex items-center" 
                onSubmit={handelSearch}
            >
                <input type="text" name="keyword" placeholder="Tìm kiếm ..." className="text-white order-2 flex-1 outline-none bg-transparent text-[16px] font-[600]" defaultValue={keywordDefault}/>
                <button type="submit" className="text-white order-1 mr-[20px]">
                    <FaMagnifyingGlass />
                </button>
            </form>
            
        </>
    )
}