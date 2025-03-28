import { useParams } from "react-router-dom";
import { useQueryHandler } from "../../hooks/useQueryHandler";
import type { CartType } from "../../@types";
import ShopSwiper from "./shop-swiper";
import ShopInfo from "./shop-swiper/shopInfo";
import ShopDescription from "./shopDesc";

const ShopComponent = () => {
  const { category, id } = useParams<{ category?: string; id?: string }>();
  
  const { data, isLoading, isError } = useQueryHandler<CartType>({
    pathname: "product-id",
    url: `flower/category/${category}/${id}`,
  });

  return (
    <section className="shopComponent py-[20px]">
      <div className="container grid grid-cols-2 gap-10">
        <ShopSwiper data={data} isLoading={isLoading} isError={isError} />
        <ShopInfo data={data} isLoading={isLoading} isError={isError} />
      </div>
       <ShopDescription/>
    </section>
  );
};

export default ShopComponent;