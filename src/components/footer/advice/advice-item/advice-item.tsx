import type { FC } from "react";
import type { AdviceItemType } from "../../../../@types";

const AdviceItem: FC<AdviceItemType> = ({ border, img, title, description }) => {
  return (
    <div
      className={`
        ${border ? "border-l-2 pl-4 border-[rgba(70, 163, 88, 0.10)]" : ""}
        flex flex-col items-center
        sm:items-start sm:text-left
        text-center
        p-3
        transition-all duration-200
        hover:bg-white hover:shadow-sm hover:rounded-md
      `}
    >
      <div className="w-12 h-12 mb-3 flex items-center justify-center">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <h2 className="text-[#3D3D3D] font-bold text-base mb-2 sm:mb-3">
        {title}
      </h2>
      <p className="text-[#727272] text-sm leading-6 max-w-[240px]">
        {description}
      </p>
    </div>
  );
};

export default AdviceItem;