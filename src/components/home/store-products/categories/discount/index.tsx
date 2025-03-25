import type { DiscountType, QueryType } from "../../../../../@types";
import { DiscountLoader } from "../../../../../generics/loading";
import { useQueryHandler } from "../../../../../hooks/useQueryHandler";

const Discount = () => {
  const { data, isError, isLoading }: QueryType<DiscountType> = useQueryHandler({
    pathname: "discount",
    url: "features/discount",
  });

  if (isLoading || isError) {
    return <DiscountLoader />;
  }

  return (
    <div className="w-full bg-[#eef7f1] text-center px-4 py-[20px] mt-3">
      <h2 className="text-[#46A358] text-[30px] font-normal leading-[40px]">
        {data?.title || "Special Discount"}
      </h2>
      <h3>UP TO {data?.discount_up_to ?? 0} % OFF</h3>
      {data?.poster_image_url ? (
        <img src={data.poster_image_url} alt={data.title || "Discount Offer"} className="mx-auto" />
      ) : (
        <p className="text-gray-400">No image available</p>
      )}
    </div>
  );
};

export default Discount;
