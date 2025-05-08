import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, Pagination } from "swiper/modules";

//img
import showcaseImg1 from "../../../assets/img/showcase-img1.png"
import showcaseImg2 from "../../../assets/img/showcase-img2.png"


const Showcase = () => {
  return (
    <div className="relative mt-4 mb-12">
      <Swiper
        modules={[Pagination,Autoplay]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
        className="">
        {/* Slide 1 */}
        
        <SwiperSlide>
          <div className="container2 max-[500px]:rounded-3xl bg-cover bg-center max-[500px]:!bg-[url('../../../src/assets/icons/showcase-img.svg')]  bg-[linear-gradient(135deg,_rgba(245,245,245,0.5)_0%,_rgba(245,245,245,0.5)_100%)]">
            <div className="flex items-center justify-between gap-10 max-[500px]:gap-0">
              <div className="p-10 max-[500px]:p-4 w-[45%] max-[809px]:w-[60%] max-[700px]:w-full">
                <p className="text-[14px]  font-medium text-[#3d3d3d] max-[700px]:text-[10px]">
                  Welcome to GreenShop
                </p>
                <h1 className="text-[60px] font-bold text-[#3d3d3d] max-[500px]:py-0 leading-none max-[1024px]:text-[35px] py-4 max-[809px]:text-[30px] max-[700px]:text-[20px] max-[500px]:text-[18px]">
                  Let’s Make a Better{" "}
                  <span className="text-primary">Planet</span>
                </h1>
                <p className="text-[14px] font-normal text-[#727272] pb-10 max-[950px]:pb-3 pt-1 max-[1024px]:text-[12px] max-[700px]:text-[10px] max-[500px]:pb-0">
                  We are an online plant shop offering a wide range of cheap
                  <span className=" max-[700px]:hidden">
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                  </span>
                </p>
                <button className="px-4 py-2 rounded max-[500px]:bg-transparent max-[500px]:p-0 max-[500px]:text-primary bg-primary text-[white] border border-transparent hover:bg-white hover:text-primary hover:border-primary transition-all max-[500px]:text-[12px]">
                  SHOP NOW 
                </button>
              </div>
              <div className="relative">
                <img className=" max-[500px]:w-[213px]" src={showcaseImg1} alt="" />
                <img
                  className="absolute max-[500px]:w-[82px] bottom-10 max-[950px]:bottom-0 left-10 max-[500px]:hidden"
                  src={showcaseImg2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
 
        <SwiperSlide>
          <div className="container2 max-[500px]:rounded-3xl bg-cover bg-center max-[500px]:!bg-[url('../../../src/assets/icons/showcase-img.svg')]  bg-[linear-gradient(135deg,_rgba(245,245,245,0.5)_0%,_rgba(245,245,245,0.5)_100%)]">
            <div className="flex items-center justify-between gap-10 max-[500px]:gap-0">
              <div className="p-10 max-[500px]:p-4 w-[45%] max-[809px]:w-[60%] max-[700px]:w-full">
                <p className="text-[14px]  font-medium text-[#3d3d3d] max-[700px]:text-[10px]">
                  Welcome to GreenShop
                </p>
                <h1 className="text-[60px] font-bold text-[#3d3d3d] max-[500px]:py-0 leading-none max-[1024px]:text-[35px] py-4 max-[809px]:text-[30px] max-[700px]:text-[20px] max-[500px]:text-[18px]">
                  Let’s Make a Better{" "}
                  <span className="text-primary">Planet</span>
                </h1>
                <p className="text-[14px] font-normal text-[#727272] pb-10 max-[950px]:pb-3 pt-1 max-[1024px]:text-[12px] max-[700px]:text-[10px] max-[500px]:pb-0">
                  We are an online plant shop offering a wide range of cheap
                  <span className=" max-[700px]:hidden">
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                  </span>
                </p>
                <button className="px-4 py-2 rounded max-[500px]:bg-transparent max-[500px]:p-0 max-[500px]:text-primary bg-primary text-[white] border border-transparent hover:bg-white hover:text-primary hover:border-primary transition-all max-[500px]:text-[12px]">
                  SHOP NOW 
                </button>
              </div>
              <div className="relative">
                <img className=" max-[500px]:w-[213px]" src={showcaseImg1} alt="" />
                <img
                  className="absolute max-[500px]:w-[82px] bottom-10 max-[950px]:bottom-0 left-10 max-[500px]:hidden"
                  src={showcaseImg2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container2 max-[500px]:rounded-3xl bg-cover bg-center max-[500px]:!bg-[url('../../../src/assets/icons/showcase-img.svg')]  bg-[linear-gradient(135deg,_rgba(245,245,245,0.5)_0%,_rgba(245,245,245,0.5)_100%)]">
            <div className="flex items-center justify-between gap-10 max-[500px]:gap-0">
              <div className="p-10 max-[500px]:p-4 w-[45%] max-[809px]:w-[60%] max-[700px]:w-full">
                <p className="text-[14px]  font-medium text-[#3d3d3d] max-[700px]:text-[10px]">
                  Welcome to GreenShop
                </p>
                <h1 className="text-[60px] font-bold text-[#3d3d3d] max-[500px]:py-0 leading-none max-[1024px]:text-[35px] py-4 max-[809px]:text-[30px] max-[700px]:text-[20px] max-[500px]:text-[18px]">
                  Let’s Make a Better{" "}
                  <span className="text-primary">Planet</span>
                </h1>
                <p className="text-[14px] font-normal text-[#727272] pb-10 max-[950px]:pb-3 pt-1 max-[1024px]:text-[12px] max-[700px]:text-[10px] max-[500px]:pb-0">
                  We are an online plant shop offering a wide range of cheap
                  <span className=" max-[700px]:hidden">
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                  </span>
                </p>
                <button className="px-4 py-2 rounded max-[500px]:bg-transparent max-[500px]:p-0 max-[500px]:text-primary bg-primary text-[white] border border-transparent hover:bg-white hover:text-primary hover:border-primary transition-all max-[500px]:text-[12px]">
                  SHOP NOW 
                </button>
              </div>
              <div className="relative">
                <img className=" max-[500px]:w-[213px]" src={showcaseImg1} alt="" />
                <img
                  className="absolute max-[500px]:w-[82px] bottom-10 max-[950px]:bottom-0 left-10 max-[500px]:hidden"
                  src={showcaseImg2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="custom-pagination flex justify-center gap-2 relative z-40 -mt-10 max-[500px]:hidden"></div>
    </div>
  );
};

export default Showcase;