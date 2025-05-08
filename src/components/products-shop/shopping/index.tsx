import { Breadcrumb, Empty } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { useReduxSelector } from "../../../hooks/useRedux";
import Card from "./card";

const Shopping = () => {
  const { data } = useReduxSelector((state) => state.shopSlice);
  const navigate = useNavigate();
  return (
    <div>
      <Breadcrumb
      className="pb-3"
        items={[
          {
            title: <Link to="/">Home</Link>,
          },

          {
            title: "Shopping card",
          },
        ]}
      />
      <div className=" items-center grid grid-cols-[2fr_1fr_1fr_1fr_1fr]  text-start border-b border-primary pb-3 max-[600px]:hidden">
        <h2 className="text-secondary text-[16px] font-medium mx-auto">
          Products
        </h2>
        <h2 className="text-secondary text-[16px] font-medium mx-auto">
          Price
        </h2>
        <h2 className="text-secondary text-[16px] font-medium mx-auto">
          Quantity
        </h2>
        <h2 className="text-secondary text-[16px] font-medium mx-auto">
          Total
        </h2>
        <h2 className="text-secondary text-[16px] font-medium mx-auto">
          Delete
        </h2>
      </div>
      {data.length ? (
        data.map((value) => <Card key={value._id} {...value} />)
      ) : (
        <div className="py-4 flex flex-col items-center gap-3">
          <Empty />
          <button
            onClick={() => navigate("/")}
            className="bg-primary text-white font-medium  gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary"
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Shopping;
