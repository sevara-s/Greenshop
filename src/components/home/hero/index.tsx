import { Carousel } from "antd";
import { hero_corusel } from "../../../utils";
import HeroItem from "./hero_item";

const Hero = () => {
  return (
    <section className="hero pt-[50px]">
      <div className="container">
        <Carousel autoplay autoplaySpeed={5000}>
           {hero_corusel.map(value=><HeroItem key={value.id} {...value}/>)}
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
