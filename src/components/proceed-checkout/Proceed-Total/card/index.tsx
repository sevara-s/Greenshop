import type { FC } from "react";
import { CartType } from "../../../../@types";

const ProceedCard: FC<CartType> = (props) => {
  return (
    <div className="bg-white h-[80px] w-full my-2 grid grid-cols-[3fr_1fr_1fr] items-center
                  rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow
                  overflow-hidden">
      <div className="flex items-center gap-4">
        <img 
          className="w-16 h-16 object-cover rounded border border-gray-100"
          src={props.main_image} 
          alt={props.title}
        />
        <div>
          <h3 className="font-medium text-gray-900 line-clamp-1">{props.title}</h3>
          <div className="text-xs text-gray-500">
            <span>SKU: </span>
            <span className="font-mono">{props._id}</span>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600">×{props.count}</div>
      <div className="text-right pr-4 font-medium text-gray-900">
        ${(props.price * Number(props.count)).toFixed(2)}
      </div>
    </div>
  );
};

export default ProceedCard;