import Blog from "../../components/Home/blog-card";
import DoubleCard from "../../components/Home/double-card";
import Showcase from "../../components/Home/showcase";
import StoreProducts from "../../components/store-products";

const Home = () => {
  return (
    <div>
     
      <Showcase />
      <main className="container2">
        <StoreProducts />
        <DoubleCard />
        <Blog />
      </main>
 
    </div>
  );
};

export default Home;
