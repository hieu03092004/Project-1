import Title from "@/app/components/title/Title";
import { ICartItem } from "@/app/interfaces/ICartItem";
import CardList from "@/app/components/card/CardList";
import { getCategories } from "@/app/helpers/getCategories";
export default async function Section2() {
    const dataCategories:ICartItem[]=await getCategories(5);
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh mục nổi bật" />
                <CardList data={dataCategories} />
            </div>
        </>
    )
}