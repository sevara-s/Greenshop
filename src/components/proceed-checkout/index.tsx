import { Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import ProductForms from "./orderForms"
import ProceedTotal from "./Proceed-Total"


const ProceedCheckoutComponents =()=>{
    return (

        <>
        <section>
            <div className="container">
            <Breadcrumb
            className="my-[10px]"
            items={[
              {
                title: <Link to={"/"}>Home</Link>,
              },
              {
                title: <Link to={"/proceed-checkout"}>Product Shop</Link>,
              },
            ]}
          />
          <div className="grid grid-cols-[1.5fr_1fr] gap-5 my-5">
            <ProductForms/>
            <ProceedTotal/>

          </div>
            </div>
        </section>
        </>

    )
}

export default ProceedCheckoutComponents