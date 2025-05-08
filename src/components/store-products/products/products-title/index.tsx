import { Modal, Select, Slider } from "antd";
import { useState } from "react";

import { title_category } from "../../../../utils";
import { CgMenuRightAlt } from "react-icons/cg";
import UseQueryHandler from "../../../../hooks/useQueryHandler";
import { CategoryType, QueryType } from "../../../../@types";
import { useSearchParamsHandler } from "../../../../hooks/useSearchParams";

const ProductsTitle = () => {
  const { setParam, getParam } = useSearchParamsHandler();
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const category = getParam("category") || "house-plants";

  const handleChange = (value: string) => {
    setParam({ category, range_max, range_min, sort: value, type });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState<number[]>([+range_min, +range_max]);

  const { data, isLoading, isError }: QueryType<CategoryType[]> =
    UseQueryHandler({
      url: "/flower/category",
      pathname: "category",
    });

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 max-[320px]:gap-2">
        {title_category.map((value) => (
          <h3
            className={` text-[18px] max-[450px]:text-[14px] ${
              type === value.label &&
              "text-primary underline cursor-pointer font-medium"
            }`}
            onClick={() =>
              setParam({
                category,
                range_max,
                range_min,
                sort,
                type: value.label,
              })
            }
            key={value.id}
          >
            {value.title}
          </h3>
        ))}
      </div>
      <div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hidden text-white font-medium gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary max-[1000px]:flex"
        >
          <CgMenuRightAlt className="text-xl max-[500px]:text-lg max-[450px]:text-sm" />
        </button>

        <div className="flex items-center gap-2 max-[1000px]:hidden">
          Short by:
          <Select
            defaultValue={sort}
            style={{ width: 150 }}
            onChange={handleChange}
            options={[
              { value: "default-sorting", label: "Default Sorting" },
              { value: "the-cheapest", label: "The Cheapest" },
              { value: "most-expensive", label: "Most Expansive" },
            ]}
          />
        </div>
      </div>

      <Modal
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
        footer={false}
      >
        <div className="p-4 max-[400px]:p-0">
          <h3 className="text-[#3d3d3d] font-bold text-[16px]">Categories</h3>
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Error loading categories</p>
          ) : (
            data?.map((cat) => (
              <div
                key={cat._id}
                onClick={() => {
                  setParam({
                    category: cat.route_path,
                    range_min,
                    range_max,
                    sort,
                    type,
                  });
                  setIsModalOpen(false);
                }}
                className={`flex items-center justify-between mt-2 cursor-pointer font-medium ${
                  category === cat.route_path && "text-primary underline"
                }`}
              >
                <h3>{cat.title}</h3>
                <h3>{Math.abs(cat?.count)}</h3>
              </div>
            ))
          )}
        </div>

        <div className="p-4 max-[400px]:p-0">
          <h3 className="text-[#3d3d3d] font-bold text-[16px]">Price Range</h3>
          <Slider
            className="!text-primary"
            range
            defaultValue={price}
            max={1000}
            min={0}
            trackStyle={[{ backgroundColor: "#46A358" }]}
            handleStyle={[{ borderColor: "#46A358" }, { borderColor: "#46A358" }]}
            onChange={(value) => setPrice(value)}
          />
          <div>
            Price{" "}
            <span className="text-primary text-[15px] font-bold ml-2">
              {price[0]} $ - {price[1]} $
            </span>
          </div>
          <button
            onClick={() => {
              setParam({
                category,
                range_min: price[0],
                range_max: price[1],
                sort,
                type,
              });
              setIsModalOpen(false); 
            }}
            className="bg-primary text-white font-medium flex items-center gap-2 w-[90px] h-[35px] justify-center mt-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary"
          >
            Filter
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductsTitle;
