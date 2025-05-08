//img
import payment from "../../../assets/img/footer-icon/payment.png";

//icon
import icon1 from "../../../assets/icons/footer/1.svg";
import icon2 from "../../../assets/icons/footer/2.svg";
import icon3 from "../../../assets/icons/footer/3.svg";
import icon4 from "../../../assets/icons/footer/4.svg";
import icon5 from "../../../assets/icons/footer/5.svg";
const FooterBottom = () => {
  return (
    <footer>
      <div className=" mt-4 p-6 max-[400px]:p-2">
        <div className="grid grid-cols-4 mb-4 gap-4 max-[1200px]:grid-cols-[1fr_1fr_2fr] max-[630px]:grid-cols-[1fr]">
          <div className=" max-[630px]:text-center">
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">
              My Account
            </h2>
            <ul>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer"> My Account</li>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer">Our stores</li>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer">Contact us</li>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer">Career</li>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer">Specials</li>
            </ul>
          </div>
          <div className=" max-[1200px]:hidden">
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">
              Help & Guide
            </h2>
            <ul >
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer"> Help Center</li>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer">How to Buy</li>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer">Shipping & Delivery</li>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer">Product Policy</li>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer"> How to Return</li>
            </ul>
          </div>
          <div className=" max-[630px]:hidden">
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">
              Categories
            </h2>
            <ul >
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer"> House Plants</li>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer">Potter Plants</li>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer">Seeds</li>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer">Small Plants</li>
              <li className="mb-2 text-gray-500 font-medium hover:text-[#46a358] cursor-pointer">Accessories</li>
            </ul>
          </div>
          <div className=" flex flex-col max-[630px]:items-center">
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
              Social Media
            </h2>
            <ul className="text-gray-500 font-medium *:hover:text-[#46a358] *:cursor-pointer">
              <div className="flex items-center gap-4 max-[400px]:gap-2">
                <button className="mb-2 border border-primary rounded-lg p-3">
                  <img src={icon1} alt="" />
                </button>
                <button className="mb-2 border border-primary rounded-lg p-3">
                  <img src={icon2} alt="" />
                </button>
                <button className="mb-2 border border-primary rounded-lg p-3">
                  <img src={icon3} alt="" />
                </button>
                <button className="mb-2 border border-primary rounded-lg p-3">
                  <img src={icon4} alt="" />
                </button>
                <button className="mb-2 border border-primary rounded-lg p-3">
                  <img src={icon5} alt="" />
                </button>
              </div>
              <li className="mb-2 max-[630px]:text-center">We accept</li>
              <img className="max-[630px]:mx-auto" src={payment} alt="" />
            </ul>
          </div>
        </div>
        <p className="text-gray-400 text-center">© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterBottom;
