import {useParams } from "react-router-dom";

import { CardType, QueryType } from "../../@types";
import UseQueryHandler from "../../hooks/useQueryHandler";
import ShopSwiper from "./shop-swiper";
import ShopInfo from "./shop-info";
import ShopDescription from "./shop-info/plant-description";

interface ParamsType {
  category?: string;
  id?: string;
}

const ShopComponent = () => {
  const { category, id }: ParamsType = useParams();
  const { data, isError, isLoading }: QueryType<CardType> = UseQueryHandler({
    pathname: "id_card",
    url: `/flower/category/${category}/${id}`,
  });



  return (
    <section className="py-[30px]">
      <div className="container2">
     
        <div className="grid grid-cols-2 gap-8 max-[980px]:grid-cols-1">
          <ShopSwiper data={data} isLoading={isLoading} isError={isError} />
          <ShopInfo data={data} isLoading={isLoading} isError={isError} />
        </div>

        <ShopDescription data={data} isLoading={isLoading} isError={isError} />
      </div>
    </section>
  );
};

export default ShopComponent;
