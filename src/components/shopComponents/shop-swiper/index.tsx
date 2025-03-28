import { Image, Skeleton } from "antd";
import { useState, type FC, useEffect } from "react";
import { DataType } from "../../../@types";

const ShopSwiper: FC<DataType> = ({ data, isError, isLoading }) => {
  const [image_src, setImage_src] = useState<string>("");

  useEffect(() => {
    if (data?.main_image) {
      setImage_src(data.main_image);
    }
  }, [data?.main_image]);

  const image_loading = () => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <Skeleton.Image key={idx} active className="!w-[120px] !h-[120px]" />
    ));
  };

  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col gap-7 justify-between h-full">
        {isLoading || isError
          ? image_loading()
          : data?.detailed_images.map((value, idx) => (
              <div
                key={idx}
                onClick={() => setImage_src(value)}
                className="w-[120px] h-[120px] bg-[#e5e5e5] cursor-pointer border-2 hover:border-[#46A358] transition-colors"
              >
                <img className="w-full h-full" src={value} alt="" />
              </div>
            ))}
      </div>

      <div className="cursor-pointer flex justify-center items-center w-full order-1">
        {isError || isLoading ? (
          <Skeleton.Image className="!w-full !h-[500px]" active={true} />
        ) : (
          <Image
            className=""
            src={image_src ? image_src : data?.main_image}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default ShopSwiper;