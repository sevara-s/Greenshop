import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useReduxSelector } from "../../../hooks/useRedux";
import { useRef } from "react";
import notificationApi from "../../../generics/notification";
import { CheckOutlined, LoadingOutlined, ArrowRightOutlined } from "@ant-design/icons";
import PricesTotal from "./prices";
import { useGetCoupon } from "../../../hooks/useQueryHandler/useQueryAction";

const CardTotal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { notify } = notificationApi();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { isLoading, coupon } = useReduxSelector((state) => state.couponSlice);
  const { mutate } = useGetCoupon();

  const getCoupon = () => {
    const coupon_code = inputRef.current?.value?.trim() || "";
    if (!coupon_code) {
      notify("coupon");
      return;
    }
    mutate({ coupon_code });
  };

  const handleCheckout = () => {
    navigate("/proceed-checkout");
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-[#f0f0f0]">
      <h3 className="pb-4 text-lg sm:text-xl font-bold text-[#3D3D3D] border-b border-[#46A358]">
        Cart Total
      </h3>

      <Form form={form} onFinish={getCoupon} className="mt-6">
        <div className="flex flex-col xs:flex-row gap-2">
          <Form.Item name="coupon" className="flex-1 mb-0">
            <input
              ref={inputRef}
              disabled={!!coupon}
              placeholder="Enter coupon code..."
              className={`w-full h-10 px-3 border rounded-lg xs:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#46A358] focus:border-transparent ${
                coupon ? "bg-gray-100" : "border-[#46A358]"
              }`}
              aria-label="Coupon code"
            />
          </Form.Item>
          <button
            type="submit"
            disabled={!!coupon || isLoading}
            className={`h-10 px-4 rounded-lg xs:rounded-l-none flex items-center justify-center gap-2 ${
              coupon
                ? "bg-green-100 text-green-700"
                : "bg-[#46A358] hover:bg-[#3a8a4a] text-white"
            } transition-colors duration-200`}
            aria-label={coupon ? "Coupon applied" : "Apply coupon"}
          >
            {isLoading ? (
              <LoadingOutlined className="text-current" />
            ) : coupon ? (
              <CheckOutlined className="text-current" />
            ) : (
              "Apply"
            )}
          </button>
        </div>
      </Form>

      <div className="my-6">
        <PricesTotal />
      </div>

      <button
        onClick={handleCheckout}
        className="w-full h-12 bg-[#46A358] hover:bg-[#3a8a4a] text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg"
        aria-label="Proceed to checkout"
      >
        Proceed To Checkout
        <ArrowRightOutlined />
      </button>

      <div className="mt-4 text-center">
        <Link
          to="/"
          className="text-[#46A358] hover:text-[#3a8a4a] font-medium transition-colors duration-200 inline-flex items-center"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CardTotal;