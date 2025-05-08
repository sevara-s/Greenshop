import { Empty } from "antd";

import type { CardType, QueryType } from "../../../@types";
import Loader from "../../../generic/loader";
import UseQueryHandler from "../../../hooks/useQueryHandler";
import Card from "./card";
import ProductsTitle from "./products-title";
import { useSearchParamsHandler } from "../../../hooks/useSearchParams";

const Products = () => {
  const { getParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
  const range_min=getParam("range_min")||0
  const range_max=getParam("range_max")||1000
  const sort=getParam("sort")||"default-sorting"
  const type=getParam("type")||"all-plants"

  const { data, isLoading, isError }: QueryType<CardType[]> = UseQueryHandler({
    pathname: `flowers-category-${category}range_min-${range_min}-range_max-${range_max}-type-${type}-sort-${sort}`,
    url: `flower/category/${category}`,
    params:{
      range_min,range_max,sort,type
    }
  });
  const { card_loader } = Loader();
  if (!data?.length && !isLoading && !isError) {
    return (
      <div className="w-full">
        <ProductsTitle />
        <Empty />
      </div>
    );
  }
  return (
    <div className="w-full">
      <ProductsTitle />
      <div className="grid grid-cols-3 gap-4 mt-4 max-[750px]:grid-cols-2 max-[500px]:grid-cols-1">
        {isLoading || isError
          ? card_loader()
          : data?.map((value) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default Products;
