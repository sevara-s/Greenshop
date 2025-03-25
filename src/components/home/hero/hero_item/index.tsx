import type { FC } from "react";
import { HeroSliderType } from "../../../../@types";
import { ArrowRightOutlined } from "@ant-design/icons";

const HeroItem: FC<HeroSliderType> = (props) => {
  return (
    <div className="bg-[#f5f5f5] flex flex-col lg:flex-row items-center px-4 lg:px-10 h-auto lg:h-[450px] py-6 lg:py-0">
      <div className="lg:w-auto w-full text-center lg:text-left">
        <h3 className="text-[#3D3D3D] text-base font-medium lg:block">
          {props.subTitle}
        </h3>
        <h2 className="font-black text-[#3D3D3D] text-4xl lg:text-8xl uppercase leading-[50px] lg:leading-[90px] pt-6 lg:pt-[70px] pb-2 lg:pb-[5px]">
          {props.title}{" "}
          <span className="text-[#46A358] block lg:inline">Planet</span>
        </h2>
        <p className="w-full lg:w-3/5 mx-auto lg:mx-0 text-[#727272] text-sm lg:text-[14px] leading-6 mb-5">
          {props.description}
        </p>
        <div className="flex justify-center lg:justify-start mt-4">
          <div className="group cursor-pointer w-[140px] h-[40px] flex items-center gap-1 justify-center bg-[#46a358] text-white rounded-md lg:w-[143px]">
            <span className="text-sm lg:text-base">{props.buttonText}</span>
            <ArrowRightOutlined className="group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>

      <div className="relative mt-8 lg:mt-0 w-full lg:w-auto">
        <img 
          src={props.big_img_url} 
          alt="" 
          className="mx-auto lg:mx-0 max-h-[300px] lg:max-h-none lg:h-auto w-auto"
          style={{ 
            height: '100%',  
            objectFit: 'contain',  
            objectPosition: 'right'  
          }}
        />
        
        {props.small_img_url && (
          <img 
            className="absolute bottom-0 right-[10%] lg:right-0 w-[80px] lg:w-auto"
            src={props.small_img_url} 
            alt="" 
            style={{
              width: 'auto', 
              height: 'auto' 
            }}
          />
        )}
      </div>
    </div>
  );
};

export default HeroItem;