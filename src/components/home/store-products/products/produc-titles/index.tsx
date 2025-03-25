import { title_category } from "../../../../../utils";
import { Select } from "antd";

const ProductsTitle = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {title_category.map((value) => (
            <h3 key={value.id}>{value.title}</h3>
          ))}
        </div>
        <div className="flex items-center gap-2 max-[600px]:hidden">
          Short by:
          <Select
            defaultValue="Default Sorting"
            style={{ width: 150 }}
            onChange={handleChange}
            options={[
              { value: "default-sorting", label: "Default Sorting" },
              { value: "the-cheapest", label: "The Cheapest" },
              { value: "most-expensive", lable: "Most Expensive" },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default ProductsTitle;
