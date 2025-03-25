import { useQueryHandler } from "../../../../hooks/useQueryHandler";
import type { CategoryItem } from "../../../../@types";
import { Loader } from "../../../../generics/loading";
import CategoriesItem from "./categories-item";
import Price from "./price";
import Discount from "./discount";

const Category = () => {
  const { data, isLoading, isError } = useQueryHandler<CategoryItem[]>({
    url: "/flower/category",
    pathname: "category",
  });

  console.log("Fetched Categories:", data);

  return (
    <div className="category w-[310px] min-w-[310px] bg-[#fbfbfb] p-2 max-[1265px]:hidden">
      <h1 className="text-[#3D3D3D] font-bold text-[16px]">Category</h1>
      <div className="p-4">
        {isLoading || isError ? (
          <Loader />
        ) : Array.isArray(data) && data.length > 0 ? (
          data.map((value) => (
            <div key={value._id}>
              <CategoriesItem {...value} />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No categories found.</p>
        )}

        <Price />
        <Discount />
      </div>
    </div>
  );
};

export default Category;
