import { Slider } from "antd";
import { useState } from "react";

const Price = () => {
  const [price, setPrice] = useState<number[]>([0, 1000]);
  return (
    <>
      <Slider
        range
        defaultValue={price}
        max={1000}
        min={0}
        onChange={(value) => setPrice(value)}
      />
      <h5 className="font-[500] text-[20px] text-[#3D3D3D]">
        Price:{" "}
        <span className="font-bold text-[14px] text-[#46A358]">
          ${price[0]} - ${price[1]}
        </span>
      </h5>

      <button className="px-[20px] py-[8px]  text-[14px] font-bold text-[#ffff] bg-[#46A358] flex items-center justify-center rounded-[0.6rem]">
        Filter
      </button>
    </>
  );
};

export default Price;
