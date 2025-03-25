import { useQueryHandler } from "../../../../hooks/useQueryHandler";
import ProductsTitle from "./produc-titles";
import Card from "./card";

// Correct Product Type
interface ProductType {
  _id: string;
  main_image: string;
  title: string;
  price: number;
  discount_price?: number;
}

const Products = () => {
  // Correctly type the query handler
  const { data, isLoading, isError } = useQueryHandler<ProductType[]>({
    pathname: "flowers",
    url: "flower/category/house-plants",
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products.</p>;

  return (
    <section className="w-full">
      <ProductsTitle />
      <div className="grid grid-cols-3 gap-4 max-[780px]:grid-cols-2">
        {data && Array.isArray(data) ? (
          data.map((value) => <Card key={value._id} {...value} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
};

export default Products;
