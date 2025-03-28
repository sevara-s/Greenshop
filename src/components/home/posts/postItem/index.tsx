import { PostType } from "../../../../@types";
import { FC } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

const Post: FC<PostType> = (props) => {
  return (
    <div className="bg-[#FBFBFB] hover:shadow-lg transition-all duration-300">
      <img width={"100%"} src={props.img} alt={props.title} className="object-cover h-[200px]" />
      <div className="px-[15px] pb-[20px] pt-[10px]">
        <h3 className="text-[#46A358] text-[14px] font-medium uppercase tracking-wider">
          {props.subTitle}
        </h3>
        <h2 className="text-[#3D3D3D] text-[20px] font-bold mt-2 mb-3 font-serif">
          {props.title}
        </h2>
        <p className="text-[#727272] text-sm font-normal leading-6 mb-4 line-clamp-3">
          {props.description}
        </p>
        <div className="group relative inline-block">
          <div className="flex items-center gap-1">
            <span className="text-[#3D3D3D] font-medium text-sm border-b border-transparent group-hover:border-[#46A358] transition-all duration-300">
              Read More
            </span>
            <div className="relative overflow-hidden w-[18px] h-[18px]">
              <ArrowRightOutlined className="absolute transition-all duration-500 group-hover:translate-x-6" />
              <ArrowRightOutlined className="absolute -translate-x-6 transition-all duration-500 group-hover:translate-x-0 text-[#46A358]" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#46A358] transition-all duration-300 group-hover:w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;