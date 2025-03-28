import { searchParam } from "../../../../../hooks/useSearchParams";
import { title_category } from "../../../../../utils";
import { Select } from "antd";

const ProductsTitle = () => {
  const { setParam, getParam } = searchParam();
  const currentType = getParam("type") || "all-plants";
  const currentSort = getParam("sort") || "default-sorting";

  const handleSortChange = (value: string) => {
    setParam({ sort: value });
  };

  const handleTypeChange = (type: string) => {
    setParam({ type });
  };

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4 flex-wrap">
        {title_category.map((value) => (
          <h3 
            key={value.id}
            onClick={() => handleTypeChange(value.label)}
            className={`cursor-pointer ${
              currentType === value.label ? "text-[#46A358] underline font-medium" : "text-gray-600"
            } hover:text-[#46A358] transition-colors`}
          >
            {value.title}
          </h3>
        ))}
      </div>
      <div className="flex items-center gap-2 max-[600px]:hidden">
        <span className="text-gray-600">Sort by:</span>
        <Select
          value={currentSort}
          style={{ width: 150 }}
          onChange={handleSortChange}
          options={[
            { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Cheapest" },
            { value: "most-expensive", label: "Most Expensive" }, // Fixed typo: 'lable' to 'label'
          ]}
        />
      </div>
    </div>
  );
};

export default ProductsTitle;