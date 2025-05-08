import { CardType, QueryType } from "../../../../@types";
import Loader from "../../../../generic/loader";
import UseQueryHandler from "../../../../hooks/useQueryHandler";
import Card from "../../../store-products/products/card";

const MyProducts = () => {
  const { data, isError, isLoading }: QueryType<CardType[]> = UseQueryHandler({
    url: "user/products",
    pathname: "my-product",
  });
const {card_loader}=Loader()
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 max-[1000px]:grid-cols-2 max-[550px]:grid-cols-1">
        {isError||isLoading?card_loader():data?.map((value) => (
          <Card key={value._id} {...value} />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
