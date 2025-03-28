import { FC } from "react";
import { CartType, QueryType } from "../../../../@types";
import UserInfo from "./userInfo";
import { Rate, Skeleton } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const ShopInfo: FC<QueryType<CartType>> = ({ data, isLoading, isError }) => {
  const size_Style =
    "w-[28px] h-[28px] border border-[#EAEAEA] rounded-full font-medium " +
    "hover:border-[#8B7355] hover:bg-[#F8F5F0] transition-colors duration-200";

  if (isLoading) {
    return (
      <div className="space-y-4 p-2">
        <Skeleton active paragraph={{ rows: 2 }} />
        <Skeleton active paragraph={{ rows: 1 }} />
      </div>
    );
  }

  if (isError || !data) {
    return <div className="p-2 text-red-500">Error loading product info</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-start hover:bg-[#F8F5F0]/50 transition-colors duration-300 p-2 rounded">
        <div className="flex gap-5">
          <UserInfo id={data.created_by} />
          <div>
            <h3 className="text-[#3D3D3D] text-[28px] font-bold hover:text-[#5D4B3C] transition-colors">
              {data.title}
            </h3>
            <p className="font-bold text-[#46A358] text-[22px] hover:text-[#8B7355] transition-colors">
              ${data.price}
            </p>
          </div>
        </div>
        
        <div className="text-right hover:scale-105 transition-transform">
          <Rate  className="hover:[&>.ant-rate-star]:text-[#8B7355]" />
          <p className="hover:text-[#5D4B3C] transition-colors">
            {data.comments?.length || 0} Customer Reviews
          </p>
        </div>
      </div>

      <div className="border-b border-[#46A358] hover:border-[#8B7355] transition-colors duration-300"></div>

      <div className="pb-4 hover:bg-[#F8F5F0]/30 transition-colors duration-300 p-2 rounded">
        <p className="font-semibold text-[#3D3D3D] hover:text-[#5D4B3C] transition-colors">
          Short description
        </p>
        <p className="text-[#3D3D3D] hover:text-[#5D4B3C]/90 transition-colors">
          {data.short_description}
        </p>
      </div>

      <h2 className="text-[#3D3D3D] text-[22px] pt-3 font-[500] hover:text-[#5D4B3C] transition-colors">
        Size:
      </h2>
      <div className="flex gap-2">
        {["S", "M", "L", "XL"].map((size) => (
          <button key={size} className={`${size_Style}`}>
            {size}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-5">
        <button
          className="
          bg-[#46A358] flex rounded-md items-center justify-center gap-1 
          text-base text-white w-[130px] h-[40px]
          hover:bg-[#8B7355] hover:shadow-md transition-all duration-300
        "
        >
          BUY NOW
        </button>
        <button
          className="
          bg-transparent border border-[#46A358] flex rounded-md items-center 
          justify-center gap-1 text-base text-[#46A358] w-[130px] h-[40px]
          hover:border-[#8B7355] hover:text-[#8B7355] hover:bg-[#F8F5F0]
          transition-all duration-300
        "
        >
          Add To Cart
        </button>
        <button
          className="
          bg-transparent border border-[#46A358] flex rounded-md items-center 
          justify-center gap-1 text-base text-[#46A358] w-[40px] h-[40px]
          hover:border-[#8B7355] hover:text-[#8B7355] hover:bg-[#F8F5F0]
          transition-all duration-300
        "
        >
          <HeartOutlined />
        </button>
      </div>

      {/* Product Metadata */}
      <div className="text-[#727272] text-[15px] font-normal my-3 p-2 rounded hover:bg-[#F8F5F0]/30 transition-colors duration-300">
        <span className="text-[#A5A5A5] pr-2 hover:text-[#8B7355]/80 transition-colors">
          SKU:
        </span>
        {data._id}
      </div>

      <div className="text-[#727272] text-[15px] font-normal my-3 p-2 rounded hover:bg-[#F8F5F0]/30 transition-colors duration-300">
        <span className="text-[#A5A5A5] pr-2 hover:text-[#8B7355]/80 transition-colors">
          Categories:
        </span>
        {data?.category?.toUpperCase()}
      </div>

      <div className="text-[#727272] text-[15px] font-normal my-3 p-2 rounded hover:bg-[#F8F5F0]/30 transition-colors duration-300">
        <span className="text-[#A5A5A5] pr-2 hover:text-[#8B7355]/80 transition-colors">
          Tags:
        </span>
        Home, Garden Plants
      </div>
    </div>
  );
};

export default ShopInfo;