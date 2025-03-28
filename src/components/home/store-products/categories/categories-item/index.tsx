import { CategoryItem } from "../../../../../@types";
import { searchParam } from "../../../../../hooks/useSearchParams";

interface CategoriesItemProps extends CategoryItem {
  route_path: string;
}

const CategoriesItem = ({ title, count, route_path }: CategoriesItemProps) => {
  const { setParam, getParam } = searchParam();
  const typeParam: string = getParam("type") || "all-plants";
  const typePrice: string = getParam("sort") || "default-sorting";
  let range_min: number = Number(getParam("range_min")) || 0;
  let range_max: number = Number(getParam("range_max")) || 1000;
  const setCategory = () => {
    setParam({
      category: route_path,
      type: typeParam,
      sort: typePrice,
      range_min,
      range_max,
    });
  };

  const isActive = getParam("category") === route_path;

  return (
    <div 
      onClick={setCategory} 
      className={`
        flex items-center justify-between 
        cursor-pointer font-[400] text-[20px]
        transition-all hover:text-[#46A358]
        ${isActive ? "text-[#46A358]" : "text-inherit"}
      `}
    >
      <h1>{title}</h1>
      <p>({Math.abs(count)})</p>
    </div>
  );
};

export default CategoriesItem;