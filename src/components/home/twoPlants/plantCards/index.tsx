import { FC } from "react";
import { TwoType } from "../../../../@types";
import { ArrowRightOutlined } from "@ant-design/icons";

const TwoPlants: FC<TwoType> = (props) => {
  return (
    <div className="mt-10 bg-[#FBFBFB] flex items-center justify-between h-[250px] p-[25px] relative mb-5 max-[477px]:flex-col max-[477px]:h-auto border border-[#e0e0e0] hover:border-[#46a358] transition-all duration-300 group">
      <div className="h-[300px] max-[609px]:h-auto relative overflow-hidden">
        <img
          className="-translate-y-5 max-[609px]:-translate-y-0 transition-all duration-500 group-hover:scale-105"
          src={props.img}
          alt={props.title}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="text-end w-[55%] max-[477px]:w-full max-[477px]:text-center">
        <h2 className="text-[#3D3D3D] font-bold text-[20px] uppercase leading-6 tracking-wider">
          {props.title}
        </h2>
        <p className="text-[#727272] text-[14px] leading-6 font-normal mt-3 mb-5">
          {props.description}
        </p>
        
        <div className="flex items-center justify-end mt-4 max-[477px]:justify-center">
          <button className="relative h-[40px] px-6 bg-[#46a358] text-white rounded-md overflow-hidden group/btn">
            <span className="relative z-10 flex items-center gap-2">
              Find More
              <ArrowRightOutlined className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-[#3a8a4a] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute bottom-0 left-0 h-[2px] bg-white w-full transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></span>
          </button>
        </div>
      </div>

      <img 
        className="absolute bottom-0 left-0 transition-all duration-500 group-hover:opacity-80" 
        src={props.vektor} 
        alt="decoration" 
      />
    </div>
  );
};

export default TwoPlants;