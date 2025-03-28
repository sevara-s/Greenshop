import { useQueryHandler } from "../../../../hooks/useQueryHandler";
import ProductsTitle from "./produc-titles";
import Card from "./card";
import { ProductsLoader } from "../../../../generics/loading";
import { searchParam } from "../../../../hooks/useSearchParams";

interface ProductType {
  _id: string;
  main_image: string;
  title: string;
  price: number;
  discount_price?: number;
}

const Products = () => {
  const { getParam } = searchParam();
  const category = getParam("category") || "house-plants";
  const type = getParam("type") || "all-plants";
  const sort = getParam("sort") || "default-sorting";
  const range_min = Number(getParam("range_min")) || 0;
  const range_max = Number(getParam("range_max")) || 1000;

  const { data, isLoading, isError } = useQueryHandler<ProductType[]>({
    pathname: `products/${category}?type=${type}&sort=${sort}&range_min=${range_min}&range_max=${range_max}`,
    url: `/flower/category/${category}`,
    params: {
      type,
      sort,
      range_min,
      range_max
    },
  });

  return (
    <section className="w-full">
      <ProductsTitle />

      {isLoading ? (
        <ProductsLoader />
      ) : isError ? (
        <div className="text-center py-10">
          <p className="text-red-500">
            Failed to load products. Please try again later.
          </p>
        </div>
      ) : data && Array.isArray(data) && data.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 max-[780px]:grid-cols-2">
          {data.map((product) => (
            <Card key={product._id} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p>No products found.</p>
        </div>
      )}
    </section>
  );
};

export default Products;