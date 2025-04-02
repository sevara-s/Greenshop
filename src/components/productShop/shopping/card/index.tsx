import { FC } from "react";
import { CartType } from "../../../../@types";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import {
  increment,
  decrement,
  deleteShopCard,
} from "../../../../redux/modalSlice/shopSlice";
import { DeleteFilled } from "@ant-design/icons";
import notificationApi from "../../../../generics/notification";

const Card: FC<CartType> = ({
  main_image,
  title,
  _id,
  price,
  count,
  userPrice,
}) => {
  const dispatch = useReduxDispatch();
  const disable = Number(count) <= 1;
  const { notify } = notificationApi();

  return (
    <div className="my-3 bg-[#f5f5f5] p-2 flex flex-wrap items-center justify-between rounded-md shadow-xs hover:shadow-sm transition-all duration-200 border border-[#e0e0e0]">
      <div className="flex items-center w-full xs:w-[55%] sm:w-[40%] gap-2 xs:gap-3">
        <img 
          className="w-[50px] h-[50px] xs:w-[60px] xs:h-[60px] sm:w-[70px] sm:h-[70px] object-cover rounded-sm border border-[#e0e0e0]"
          src={main_image} 
          alt={title}
          loading="lazy"
        />
        <div className="min-w-0">
          <h3 className="text-[14px] xs:text-[15px] sm:text-[16px] font-medium truncate">
            {title}
          </h3>
          <p className="text-[10px] xs:text-[12px] sm:text-[14px] text-[#A5A5A5] pt-1 truncate">
            <span className="hidden xs:inline">SKU: </span>{_id.slice(0, 6)}...
          </p>
        </div>
      </div>

      <div className="hidden xs:block text-[#727272] text-[12px] sm:text-[16px] font-medium w-[15%] text-center">
        ${price}
      </div>

      <div className="flex items-center justify-center w-[45%] xs:w-[25%] sm:w-[20%] gap-1 xs:gap-2 sm:gap-3 mt-2 xs:mt-0">
        <button
          disabled={disable}
          onClick={() => dispatch(decrement({ _id }))}
          className={`w-[20px] h-[20px] xs:w-[22px] xs:h-[22px] sm:w-[25px] sm:h-[25px] bg-[#46A358] rounded-full text-white flex items-center justify-center
            transition-all duration-200 ${disable ? 'opacity-50 cursor-not-allowed' : 
            'hover:bg-[#3a8a4a] hover:scale-105 active:scale-95'}`}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="text-[14px] xs:text-[15px] sm:text-[17px] min-w-[20px] text-center">
          {count}
        </span>
        <button
          onClick={() => dispatch(increment({ _id }))}
          className="w-[20px] h-[20px] xs:w-[22px] xs:h-[22px] sm:w-[25px] sm:h-[25px] bg-[#46A358] rounded-full text-white flex items-center justify-center
            transition-all duration-200 hover:bg-[#3a8a4a] hover:scale-105 active:scale-95"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <div className="text-[#727272] text-[12px] sm:text-[16px] font-medium w-[45%] xs:w-[15%] text-right xs:text-center mt-2 xs:mt-0">
        ${Number(userPrice).toFixed(2)}
      </div>

      <div className="w-[10%] flex justify-end">
        <button
          onClick={() => {
            dispatch(deleteShopCard({ _id }));
            notify("delete");
          }}
          className="p-1 xs:p-1.5 rounded-full hover:bg-[#ffebee] transition-all duration-200 group"
          aria-label="Remove item"
        >
          <DeleteFilled className="text-[#727272] text-[16px] xs:text-[18px] sm:text-[20px] 
            transition-all duration-200 group-hover:text-red-500 group-hover:scale-110" />
        </button>
      </div>
    </div>
  );
};

export default Card;