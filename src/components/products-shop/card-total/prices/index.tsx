import { useReduxSelector } from "../../../../hooks/useRedux";

const Prices = () => {
  const { data, coupon } = useReduxSelector((state) => state.shopSlice);

  const totalPrice = data.reduce((acc, value) => acc + (value.userPrice || 0), 0).toFixed(2);
  const totalCoupon = ((parseFloat(totalPrice) * (coupon || 0)) / 100).toFixed(2);
  const finalPrice = (parseFloat(totalPrice) - parseFloat(totalCoupon)).toFixed(2);

  const couponStyle = "text-secondary text-[15px]";

  return (
    <div>
      <div className="mt-[20px]">
        <div className="flex items-center justify-between pt-3">
          <h3 className={couponStyle}>Subtotal</h3>
          <h2 className="text-secondary font-medium text-[18px]">
            $ {totalPrice}
          </h2>
        </div>
        <div className="flex items-center justify-between pt-3">
          <h3 className={couponStyle}>Coupon Discount</h3>
          <h2 className="text-secondary font-medium text-[18px]">
            $ {totalCoupon}
          </h2>
        </div>
        <div className="flex items-start justify-between pt-3">
          <h3 className={couponStyle}>Shipping</h3>
          <div className="text-end">
            <h2 className="text-secondary font-medium text-[18px]">$ 16.00</h2>
            <p className="font-normal text-primary text-[13px]">
              View shipping charge
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[20px]">
        <h2 className="font-bold text-[18px]">Total:</h2>
        <div>
          <h2
            className={`font-semibold text-primary text-[18px] ${
              Boolean(coupon) && "line-through"
            }`}
          >
            $ {totalPrice}
          </h2>

          {Boolean(coupon) && (
            <h2 className="!font-bold text-primary text-[18px]">$ {finalPrice}</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prices;
