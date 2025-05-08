import { Modal } from "antd";

import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import Card from "../../proceed-checkout/proceed-total/card";
import { setTrackmodalVisibility } from "../../../redux/modalSlice";
import { useDeleteOrder } from "../../../hooks/useQueryHandler/useQueryActions";
import type { CardDataType } from "../../../@types";

const TrackModal = () => {
  const { trackmodalVisibility } = useReduxSelector(
    (state) => state.modalSlice
  );
  const { order } = useReduxSelector((state) => state.trackOrder);

  const dispatch = useReduxDispatch();
  const { mutate } = useDeleteOrder();
  return (
    <Modal
      onOk={() => {
        dispatch(setTrackmodalVisibility());
        mutate({ _id: order?._id as string });
      }}
      okType="danger"
      okText={"Delete"}
      onCancel={() => dispatch(setTrackmodalVisibility())}
      className="!w-[45%] max-[1100px]:!w-[70%] max-[700px]:!w-[80%]"
      open={trackmodalVisibility}
    >
      <div className="flex items-start justify-between mt-5 max-[650px]:flex-wrap gap-2 max-[300px]:justify-center">
        <div className="border-r pr-4 max-[350px]:!border-none">
          <p>Order Number</p>
          <h2 className="font-bold">{order?._id || "N/A"}</h2>
        </div>
        <div className="border-r pr-4 max-[350px]:!border-none">
          <p>Date</p>
          <h2 className="font-bold">
            {order?.created_at?.slice(0, 10) || "N/A"}
          </h2>
        </div>
        <div className="border-r pr-4 max-[350px]:!border-none">
          <p>Total</p>
          <h2 className="font-bold">
            ${order?.extra_shop_info?.total?.toFixed(2) || "0.00"}
          </h2>
        </div>
        <div className="border-r pr-4 max-[350px]:!border-none">
          <p>Payment Method</p>
          <h2 className="font-bold">
            {order?.extra_shop_info?.method || "N/A"}
          </h2>
        </div>
      </div>

      <h1 className="border-b border-primary text-2xl font-semibold py-2">
        Order Details
      </h1>

      {order?.shop_List?.length ? (
        order.shop_List.map((value: CardDataType) => (
          <Card key={value._id} {...value} />
        ))
      ) : (
        <p className="text-gray-500 text-center py-4">No items in order</p>
      )}
      <div className="flex items-center justify-between py-2">
        <p>Shipping</p>
        <h3 className="font-bold text-primary">$ 16.00</h3>
      </div>
      <div className="flex items-center justify-between py-2 border-b border-primary">
        <p>Total Price</p>
        <h3 className="font-bold text-primary">
          <p className="max-[350px]:hidden"> With shipping</p> ${" "}
          {order?.extra_shop_info?.total.toFixed(2)}
        </h3>
      </div>
      <p className="text-center w-[70%] mx-auto mt-2 max-[400px]:w-full">
        Your order is currently being processed. You will receive an order
        confirmation email shortly with the expected delivery date for your
        items.
      </p>
    </Modal>
  );
};

export default TrackModal;
