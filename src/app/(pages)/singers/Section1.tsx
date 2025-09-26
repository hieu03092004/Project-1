import Title from "@/app/components/title/Title";
import { ICartItem } from "@/app/interfaces/ICartItem";
import CardList from "@/app/components/card/CardList";
import { getSingers } from "@/app/helpers/getSingers";
export default async function Section1() {
    const dataSingers:any[]=await getSingers();
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách ca sĩ" />
                <CardList data={dataSingers} />
            </div>
        </>
    )
}