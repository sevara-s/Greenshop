import { Slider } from "antd";
import { useState, useEffect } from "react";
import { searchParam } from "../../../../../hooks/useSearchParams";

const Price = () => {
  const { setParam, getParam } = searchParam();
  
  const initialMin = Number(getParam("range_min")) || 0;
  const initialMax = Number(getParam("range_max")) || 1000;
  
  const [price, setPrice] = useState<[number, number]>([initialMin, initialMax]);
  
  const typeParam = getParam("type") || "all-plants";
  const categoryPath = getParam("category") || "house-plants";
  const typePrice = getParam("sort") || "default-sorting";

  useEffect(() => {
    setPrice([initialMin, initialMax]);
  }, [initialMin, initialMax]);

  const applyPriceFilter = () => {
    setParam({
      category: categoryPath,
      type: typeParam,
      sort: typePrice,
      range_min: price[0],
      range_max: price[1]
    });
  };

  return (
    <div className="space-y-4 p-4">
      <Slider
        range
        value={price}
        defaultValue={[0, 1000]}
        max={1000}
        min={0}
        onChange={(value) => setPrice(value as [number, number])}
      />
      
      <h5 className="font-medium text-[20px] text-[#3D3D3D]">
        Price:{" "}
        <span className="font-bold text-[14px] text-[#46A358]">
          ${price[0]} - ${price[1]}
        </span>
      </h5>

      <button
        onClick={applyPriceFilter}
        className="w-full px-5 py-2 text-sm font-bold text-white bg-[#46A358] rounded-lg hover:bg-[#3d8f4d] transition-colors"
      >
        Filter
      </button>
    </div>
  );
};

export default Price;