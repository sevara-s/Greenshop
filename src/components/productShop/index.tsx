import CardTotal from "./card-total";
import Shopping from "./shopping";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const ProductShopComponent = () => {
  return (
    <>
      <section className="py-5">
        <div className="container ">
          <Breadcrumb
            className="my-[10px]"
            items={[
              {
                title: <Link to={"/"}>Home</Link>,
              },
              {
                title: <Link to={"/proceed-checkout"}>Checkout</Link>,
              },
            ]}
          />
          <div className="items grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5">
          <Shopping />
          <CardTotal />
          </div>
         
        </div>
      </section>
    </>
  );
};
export default ProductShopComponent;
