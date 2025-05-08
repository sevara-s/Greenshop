import { useReduxSelector } from "../../../hooks/useRedux";
import Prices from "../../products-shop/card-total/prices";
import Card from "./card";

const ProceedTotal = () => {
  const { data } = useReduxSelector((state) => state.shopSlice);
  return (
    <div>
      {data.map((value) => (
        <Card key={value._id} {...value} />
      ))}
      <Prices/>
    </div>
  );
};

export default ProceedTotal;
