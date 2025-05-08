import { type FC, useState } from "react";
import { Image, Skeleton } from "antd";

import { CardType, QueryType } from "../../../@types";
import Loader from "../../../generic/loader";

const {image_loading} = Loader()
const ShopSwiper: FC<QueryType<CardType>> = ({ data, isError, isLoading }) => {
  const [imgSrc, setImgSrc] = useState<string>("");
  return (
 
    <div className="flex items-start gap-5">
    <div className="flex flex-col justify-between items-center h-[500px] max-[600px]:h-[340px] gap-[10px] max-[460px]:h-[300px]">
        {isLoading || isError
            ? image_loading()
            : data?.detailed_images.map((value, idx) => (
                  <div
                      key={idx}
                      onClick={() => setImgSrc(value)}
                      className="w-[90px] h-[90px] p-[10px] max-[600px]:h-[60px] max-[600px]:w-[60px]  bg-[#e5e5e5] cursor-pointer border border-[#3d3d3d2f] hover:border-[#46A358] transition-colors flex justify-center items-center">
                      <img
                          className="w-full h-full"
                          src={value}
                          alt=""
                      />
                  </div>
              ))}
    </div>

    <div className="flex justify-center items-center !w-full border h-[500px] border-[#3d3d3d2f] overflow-hidden max-[600px]:h-[340px] max-[460px]:h-[300px]">
        {isError || isLoading ? (
            <Skeleton.Image className="!w-full !h-full" active={true} />
        ) : (
            <Image
                className="!h-full !w-full !object-contain p-[20px]"
                src={imgSrc ? imgSrc : data?.main_image}
                alt=""
            />
        )}
    </div>
</div>
  );
};

export default ShopSwiper;
