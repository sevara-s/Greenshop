// img
import icon1 from "../../../assets/img/footer-icon/1.png";
import icon2 from "../../../assets/img/footer-icon/2.png";
import icon3 from "../../../assets/img/footer-icon/3.png";

const FooterTop = () => {
  return (
    <div className="mb-4 p-6 max-[400px]:p-2">
      <div className="grid grid-cols-4 gap-[15px] max-[1200px]:grid-cols-3 max-[950px]:grid-cols-2 max-[630px]:grid-cols-1">
        <div className="flex flex-col gap-[10px] items-start justify-between max-[630px]:hidden">
          <img src={icon1} alt="" className="h-[70px] object-contain" />

          <h4 className="font-bold text-[17px] leading-[94%] text-[#3d3d3d]">
            Garden Care
          </h4>

          <p className="font-normal text-[14px] leading-[127%] text-[#727272]">
            We are an online plant shop offering <br /> a wide range of cheap and
            trendy plants.
          </p>
        </div>

        <div className="flex flex-col gap-[10px] items-start justify-between max-[950px]:hidden">
          <img src={icon2} alt="" className="h-[70px] object-contain" />

          <h4 className="font-bold text-[17px] leading-[94%] text-[#3d3d3d]">
            Plant Renovation
          </h4>

          <p className="font-normal text-[14px] leading-[127%] text-[#727272]">
            We are an online plant shop offering <br /> a wide range of cheap and
            trendy plants.
          </p>
        </div>

        <div className="flex flex-col gap-[10px] items-start justify-between max-[1200px]:hidden">
          <img src={icon3} alt="" className="h-[70px] object-contain" />

          <h4 className="font-bold text-[17px] leading-[94%] text-[#3d3d3d]">
            Watering Garden
          </h4>

          <p className="font-normal text-[14px] leading-[127%] text-[#727272]">
            We are an online plant shop offering <br /> a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="flex flex-col gap-[12px] flex-2/4">
          <p className="font-bold text-[17px] leading-[94%] text-[#3d3d3d]">
            Would you like to join newsletters?
          </p>

          <div className="flex justify-between items-center h-[35px] overflow-hidden rounded-md border border-primary">
            <input
              type="text"
              placeholder="enter your email address..."
              className="h-full w-full outline-none px-2"
            />

            <button className="h-full px-[20px] text-white bg-primary border-l border-primary transition-all duration-300 hover:bg-transparent hover:text-primary">
              Join
            </button>
          </div>

          <p className="font-normal text-[14px] leading-[127%] text-[#727272]">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
