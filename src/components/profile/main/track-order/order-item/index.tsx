import type { OrderType } from "../../../../../@types";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { setTrackmodalVisibility } from "../../../../../redux/modalSlice";
import { setOrder } from "../../../../../redux/trackOrderSlice";

interface OrderItemProps {
  data: OrderType;
}

const OrderItem: React.FC<OrderItemProps> = ({ data }) => {
  const dispatch = useReduxDispatch();

  const handleMoreClick = () => {
    dispatch(setOrder(data));
    dispatch(setTrackmodalVisibility());
  };

  return (
    <div
      className="grid grid-cols-[1.5fr_1fr_1fr_1fr] justify-between mt-5 bg-[#FBFBFB] p-4 gap-3 rounded-lg shadow-sm max-[1000px]:grid-cols-1 md:gap-6 max-[500px]:p-0"
    >
      <div className="pl-4 border-r pr-4 md:border-b md:pr-0 md:pb-2">
        <p className="text-sm text-gray-600">Order Number</p>
        <h2 className="font-bold truncate text-lg">{data._id}</h2>
      </div>

      <div className="pl-4 border-r pr-4 md:border-b md:pr-0 md:pb-2">
        <p className="text-sm text-gray-600">Date</p>
        <h2 className="font-bold truncate text-lg">{data.created_at.slice(0, 10)}</h2>
      </div>

      <div className="pl-4 border-r pr-4 md:border-b md:pr-0 md:pb-2">
        <p className="text-sm text-gray-600">Total</p>
        <h2 className="font-bold text-lg">
          ${data?.extra_shop_info?.total?.toFixed(2) || '0.00'}
        </h2>
      </div>

      <div
        onClick={handleMoreClick}
        className="pl-4 pr-4 md:pr-0 md:pb-2 cursor-pointer md:border-b"
      >
        <p className="text-sm text-gray-600">More</p>
        <button
          className="text-[#45A358] text-sm font-medium hover:underline focus:outline-none"
          aria-label="View more details"
        >
          More details
        </button>
      </div>
    </div>
  );
};

export default OrderItem;