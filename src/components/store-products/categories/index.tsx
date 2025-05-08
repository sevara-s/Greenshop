import { CategoryType, QueryType } from "../../../@types";
import Loader from "../../../generic/loader";
import UseQueryHandler from "../../../hooks/useQueryHandler";
import CategoriesItem from "./categories_item";
import Discount from "./discount";
import Price from "./price";

const Categories = () => {
  const { data, isLoading, isError }: QueryType<CategoryType[]> =
    UseQueryHandler({
      url: "flower/category",
      pathname: "category",
    });

  const { category_loader } = Loader();
  return (
    <div className="w-[310px] bg-[#fbfbfb] p-2 max-[1000px]:hidden">
      <h3 className="text-[#3d3d3d] font-bold text-[16px]">Categories</h3>
      <div className="p-4">
        {isLoading || isError
          ? category_loader()
          : data?.map((value) => <CategoriesItem key={value._id} {...value} />)}
          <Price/>
          <Discount/>
      </div>
    </div>
  );
};

export default Categories;
