import Category from "./categories";
import Products from "./products";

const StoreProducts = () => {
  return (
    <>
      <section className="store flex items-start gap-5 mt-5">
        <div className="container flex justify-start gap-5 mt-5">
          <Category />
          <Products/>
        </div>
      </section>
    </>
  );
};
export default StoreProducts;
