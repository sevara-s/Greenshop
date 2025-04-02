import { useReduxSelector } from "../../../hooks/useRedux";
import Card from "./card";
import { Empty } from "antd";
import { useNavigate } from "react-router-dom"; 

const Shopping = () => {
  const { data } = useReduxSelector((state) => state.shopSlice);
  const navigate = useNavigate();  

  return (
    <div className="w-full">
      {data.length > 0 ? (
        <>
          <div className="flex items-center justify-between text-start border-b border-[#46A358] pb-3">
            <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[28%]">
              Products
            </h2>
            <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
              Price
            </h2>
            <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
              Quantity
            </h2>
            <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
              Total
            </h2>
            <h3 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px]">
              Delete
            </h3>
          </div>
          {data.map((value) => (
            <Card key={value._id} {...value} />
          ))}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4">
          <Empty description="Your cart is empty" />
          <button 
            onClick={() => navigate("/")}
            className="bg-[#46A358] text-white px-6 py-2 rounded-md 
            hover:bg-[#3a8a4a] transition-all duration-300 
            shadow-md hover:shadow-lg transform hover:-translate-y-0.5
            border border-[#46A358] hover:border-[#3a8a4a]"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Shopping;
