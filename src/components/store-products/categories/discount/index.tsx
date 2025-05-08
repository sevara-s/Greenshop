import type { DiscountType, QueryType } from "../../../../@types";
import Loader from "../../../../generic/loader";
import UseQueryHandler from "../../../../hooks/useQueryHandler";

const Discount = () => {
  const { data, isError, isLoading }: QueryType<DiscountType> = UseQueryHandler(
    {
      pathname: "discount",
      url: "features/discount",
    }
  );
  const { discount_loader } = Loader();
  return (
    <div className="w-full bg-[#eef7f1] text-center px-4 py-20px mt-4">
      {isError || isLoading ? (
        discount_loader()
      ) : (
        <div>
          <h2 className="text-primary text-[30px] leading-[40px]">
            {data?.title}
          </h2>
          <h3 className="text-secondary font-bold text-[20px] pt-[17px">
            UP TO {data?.discoount_up_to} OFF
          </h3>
          <img src={data?.poster_image_url} alt="" />
        </div>
      )}
    </div>
  );
};

export default Discount;
