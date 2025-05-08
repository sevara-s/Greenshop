import Categories from "./categories";
import Products from "./products";

const StoreProducts = () => {
  return (
    <div className="flex items-start gap-5 ">
     
      <Categories />
      <Products />
    </div>
  );
};

export default StoreProducts;
