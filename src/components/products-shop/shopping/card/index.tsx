import { FC } from "react";

import { DeleteFilled } from "@ant-design/icons";

import { CardDataType } from "../../../../@types";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { counterEdited, deletedData } from "../../../../redux/shopSlice";
import { NotificationApi } from "../../../../generic/notifications";

const Card: FC<CardDataType> = (props) => {
  const { main_image, title, _id, price, userPrice, counter } = props;
  const dispatch = useReduxDispatch();
  const notify = NotificationApi();
  const FindData = counter === 0;
  if (FindData) {
    dispatch(deletedData(_id));
  }
  return (
    <div className=" relative my-5 bg-[#eee] p-2  rounded-lg grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center max-[600px]:grid-cols-[2fr_1fr_1fr_1fr]  max-[500px]:grid-cols-[2fr_1fr_1fr]  max-[420px]:grid-cols-[2fr_1fr] ">
      <div className="flex items-center gap-4">
        <img className="w-[70px] h-[70px]" src={main_image} alt="" />
        <div>
          <h3 className="text-[16px] font-medium">{title}</h3>
          <p className="text-[14px] font-normal pt-[10px]">
            <span className="text-[#a5a5a5] max-[1200px]:hidden">
              SKU: {_id}
            </span>
          </p>
          <div className="hidden items-center gap-3 mx-auto max-[600px]:flex">
            <button
              onClick={() =>
                dispatch(counterEdited({ type: "decrement", id: _id }))
              }
              className="w-[25px] h-[25px] bg-primary rounded-full text-white flex items-center justify-center pb-1"
            >
              -
            </button>
            <span className="text-[17px]">{counter}</span>
            <button
              onClick={() =>
                dispatch(counterEdited({ type: "increment", id: _id }))
              }
              className="w-[25px] h-[25px] bg-primary rounded-full text-white flex items-center justify-center pb-1"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="text-[#727272] text-[16px] font-medium mx-auto top-3 right-3 max-[420px]:absolute">
        $ {price}
      </div>
    
      <div className="flex items-center gap-3 mx-auto max-[600px]:hidden">
        <button
          onClick={() =>
            dispatch(counterEdited({ type: "decrement", id: _id }))
          }
          className="w-[25px] h-[25px] bg-primary rounded-full text-white flex items-center justify-center pb-1"
        >
          -
        </button>
        <span className="text-[17px]">{counter}</span>
        <button
          onClick={() =>
            dispatch(counterEdited({ type: "increment", id: _id }))
          }
          className="w-[25px] h-[25px] bg-primary rounded-full text-white flex items-center justify-center pb-1"
        >
          +
        </button>
      </div>
      <h3 className="mx-auto max-[500px]:hidden">$ {userPrice}</h3>
      <button
      className="  bottom-3 right-3 max-[420px]:absolute"
        onClick={() => {
          dispatch(deletedData(_id)); notify("delete-data");
        }}
      >
        <DeleteFilled className="text-[#727272] text-[20px] mx-auto" />
      </button>
    </div>
  );
};

export default Card;
