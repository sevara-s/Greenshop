import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

import ProceedForm from "./proceed-form";
import ProceedTotal from "./proceed-total";
import OrderModal from "../modals/order-modals";

const ProceedCheckoutComponent = () => {
  return (
    <div className="container2">
      <Breadcrumb
        className="py-3"
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: <Link to="/products-shop">Products shop</Link>,
          },
          {
            title: "Proceed checkout",
          },
        ]}
      />
      <div className="grid grid-cols-[1.5fr_1fr] gap-5 max-[800px]:grid-cols-1">
        <ProceedForm />
        <ProceedTotal />
      </div>
      <OrderModal/>
    </div>
  );
};

export default ProceedCheckoutComponent;
