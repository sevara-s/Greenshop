import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import Card from "../../proceed-checkout/proceed-total/card";
import { setOrderModalVisibility } from "../../../redux/modalSlice";
import { order } from "../../../redux/shopSlice";

const OrderModal = () => {
  const { data, coupon } = useReduxSelector((state) => state.shopSlice);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 16);
  const total = coupon ? totalPrice - (totalPrice * coupon) / 100 : totalPrice;
  const { ordermodalVisibility } = useReduxSelector(
    (state) => state.modalSlice
  );
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();

  const track = () => {
    navigate("/profile/track-order");
    dispatch(order())
    dispatch(setOrderModalVisibility());
  };
  return (
    <Modal
    onCancel={track}
      open={ordermodalVisibility}
      footer={false}
      title={"Order Confirmation"}
      className="!w-[45%] max-[1100px]:!w-[70%] max-[700px]:!w-[80%]"
    >
      <div className="flex items-start justify-between mt-5 max-[650px]:flex-wrap gap-2 max-[300px]:justify-center">
        <div className="border-r pr-4 max-[300px]:border-none">
          <p>Order Number</p>
          <h2 className="font-bold">{Date.now()}</h2>
        </div>
        <div className="border-r pr-4 max-[300px]:border-none">
          <p>Date</p>
          <h2 className="font-bold">{String(new Date()).slice(0, 15)}</h2>
        </div>
        <div className="border-r pr-4 max-[300px]:border-none">
          <p>Total</p>
          <h2 className="font-bold">{total.toFixed(2)}</h2>
        </div>
        <div className="border-r pr-4 max-[300px]:border-none">
          <p>Payment Method</p>
          <h2 className="font-bold">Cash on delivery</h2>
        </div>
      </div>
      <h1 className="border-b border-primary text-2xl font-semibold py-2">
        Order Details
      </h1>
      {data.map((value) => (
        <Card key={value._id} {...value} />
      ))}
      <div className="flex items-center justify-between py-2">
        <p>Shipping</p>
        <h3 className="font-bold text-primary">$ 16.00</h3>
      </div>
      <div className="flex items-center justify-between py-2 border-b border-primary">
        <p>Total Price</p>
        <h3 className="font-bold text-primary ">
         <p className="max-[350px]:hidden"> With shipping</p> $ {total.toFixed(2)}
        </h3>
      </div>
      <p className="text-center w-[70%] mx-auto max-[400px]:w-full">
        Your order is currently being processed. You will receive an order
        confirmation email shortly with the expected delivery date for your
        items.
      </p>
      <button
        onClick={track}
        className="bg-primary text-white font-medium flex items-center gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary mx-auto mt-3"
      >
        Track your button
      </button>
    </Modal>
  );
};

export default OrderModal;
