import { Form } from "antd";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

//icon
import { LoadingOutlined } from "@ant-design/icons";

import Prices from "./prices";
import { NotificationApi } from "../../../generic/notifications";
import { useGetCoupon } from "../../../hooks/useQueryHandler/useQueryActions";

const CardTotal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const notify = NotificationApi();
  const navigate=useNavigate()
  const { mutate, isPending } = useGetCoupon();
  const getCoupon = () => {
    const coupon:string = inputRef.current?.value as string;
    if (coupon.trim() === "") {
      notify("not-coupon");
    }
   mutate(coupon);
  };

  return (
    <div className="mt-9">
      <h3 className="pb-2 text-secondary border-b border-primary font-bold text-[18px]">
        Card Total
      </h3>

      <p className=" mt-[35px]">Coupon Apply</p>
      <Form onFinish={getCoupon} className="flex h-[40px]  mt-[5px]">
        <input
          ref={inputRef}
          type="text"
          name="coupon"
          placeholder="Enter coupon... AEMA_MEM"
          className="border w-4/5 border-primary font-medium pl-[15px] plaseholder:font-normal rounded-l-lg rounded-r-none outline-none text-[14px] max-[900px]:w-full"
        />
        <button className="bg-primary text-white font-medium  gap-2 px-3 py-2 rounded-r-lg border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary rounded-l-none">
          {isPending ? <LoadingOutlined /> : "Apply"}
        </button>
      </Form>
      <Prices />
      <div className="flex flex-col gap-2 py-2">
        <button onClick={()=>navigate("/proceed-checkout")} className="bg-primary text-white font-medium  gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary ">
          Proceed To Checkout
        </button>
        <button className="bg-white text-primary font-medium  gap-2 px-3 py-2 rounded-md   transition-all duration-300 hover:bg-primary hover:text-white ">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CardTotal;
