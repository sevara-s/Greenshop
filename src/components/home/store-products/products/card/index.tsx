import { FC } from "react"
import { CartType } from "../../../../../@types";
import { ShoppingCartOutlined, HeartOutlined, SearchOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { addData } from "../../../../../redux/modalSlice/shopSlice";
import notificationApi from "../../../../../generics/notification";

const Card: FC<CartType> = (props) => {
  const navigate =useNavigate()
  const dispatch = useReduxDispatch()
  const {notify} = notificationApi()
  return (
    <div className="flex flex-col gap-[8px] xs:gap-[10px] mt-4 xs:mt-6 w-full group/card relative">
      <div className="h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] bg-[#f0f0f0] flex justify-center items-center transition-all duration-700 relative group overflow-hidden rounded-lg 
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-[#46A358] before:transition-all before:duration-300
        group-hover/card:before:h-1">
        
        <img 
          className="w-[75%] xs:w-[80%] h-auto max-h-[75%] xs:max-h-[85%] object-contain" 
          src={props.main_image} 
          alt={props.title} 
        />

        <div className="absolute bottom-[10px] xs:bottom-[15px] sm:bottom-[20px] flex items-center gap-[8px] xs:gap-[12px] sm:gap-[15px] opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <button onClick={()=>{
            dispatch(addData(props))
            notify("add-data")
            }} className="text-[18px] xs:text-[20px] sm:text-[24px] text-[#3D3D3D] hover:text-[#46A358] w-[36px] xs:w-[42px] sm:w-[48px] h-[36px] xs:h-[42px] sm:h-[48px] bg-white rounded-md flex items-center justify-center shadow-md hover:shadow-lg transition-all">
            <ShoppingCartOutlined />
          </button>

          <button className="text-[18px] xs:text-[20px] sm:text-[24px] text-[#3D3D3D] hover:text-[#46A358] w-[36px] xs:w-[42px] sm:w-[48px] h-[36px] xs:h-[42px] sm:h-[48px] bg-white rounded-md flex items-center justify-center shadow-md hover:shadow-lg transition-all">
            <HeartOutlined />
          </button>

          <button onClick={()=>navigate(`/shop/${props.category}/${props._id}`)} className="text-[18px] xs:text-[20px] sm:text-[24px] text-[#3D3D3D] hover:text-[#46A358] w-[36px] xs:w-[42px] sm:w-[48px] h-[36px] xs:h-[42px] sm:h-[48px] bg-white rounded-md flex items-center justify-center shadow-md hover:shadow-lg transition-all">
            <SearchOutlined />
          </button>
        </div>
      </div>

      <h4 className="font-[500] text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] text-[#3D3D3D] truncate">
        {props.title}
      </h4>

      <div className="price flex items-center gap-[8px] xs:gap-[12px] sm:gap-[15px]">
        <h5 className="text-[#46A358] font-[700] text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px]">
          {props.price} $
        </h5>
        {props.discount_price && (
          <h6 className="text-[#A5A5A5] font-[400] text-[14px] xs:text-[16px] sm:text-[18px] line-through">
            {props.discount_price} $
          </h6>
        )}
      </div>
    </div>
  )
}

export default Card