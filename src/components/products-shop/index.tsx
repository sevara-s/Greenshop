import CardTotal from "./card-total"
import Shopping from "./shopping"

const ProductsShopComponent = () => {
  return (
    <div className="container2 grid grid-cols-[3fr_1fr] py-5 gap-5 max-[1200px]:grid-cols-[2fr_1fr] max-[900px]:grid-cols-1">
      <Shopping/>
      <CardTotal/>
    </div>
  )
}

export default ProductsShopComponent