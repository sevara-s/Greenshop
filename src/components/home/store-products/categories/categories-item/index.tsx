
import { CategoryItem } from "../../../../../@types";
import { searchParam } from "../../../../../hooks/useSearchParams";

const CategoriesItem = ({ title, count }: CategoryItem) => {
  const {setParam} = searchParam()
  return (
    <div
     
     className="flex items-center justify-between mt-2 cursor-pointer">
      <h1>{title}</h1>
      <p>({Math.abs(count)})</p>
    </div>
  );
};

export default CategoriesItem;

// className={`flex items-center justify-between cursor-pointer font-bold text-[1.5rem] ${
//     getParam("category") === props.route_path && "text-[#46A358]"
//   }  transition-all hover:text-[#46A358]`}