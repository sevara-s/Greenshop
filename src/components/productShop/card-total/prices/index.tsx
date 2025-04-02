import { useReduxSelector } from "../../../../hooks/useRedux";

const PricesTotal = () => {
  const { data } = useReduxSelector((state) => state.shopSlice);
  const { coupon } = useReduxSelector((state) => state.couponSlice);

  const subtotal = data.reduce((acc, item) => acc + Number(item.userPrice), 0);
  const shippingFee = 16.00;
  const discountAmount = coupon ? (subtotal * coupon) / 100 : 0;
  const total = subtotal + shippingFee - discountAmount;

  const labelStyle = "text-[#3D3D3D] text-[15px] font-normal";
  const valueStyle = "text-[#3D3D3D] text-[15px] sm:text-[18px] font-medium";
  const totalLabelStyle = "text-[#3D3D3D] text-[16px] font-bold";
  const totalValueStyle = "text-[#46A358] text-[18px] font-bold";

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className={labelStyle}>Subtotal</h3>
          <span className={valueStyle}>${subtotal.toFixed(2)}</span>
        </div>
        
        {coupon > 0 && (
          <div className="flex justify-between items-center">
            <h3 className={labelStyle}>Coupon Discount ({coupon}%)</h3>
            <span className={valueStyle}>-${discountAmount.toFixed(2)}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <h3 className={labelStyle}>Shipping</h3>
          <span className={valueStyle}>${shippingFee.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between pt-4 border-t border-[#EAEAEA]">
        <h2 className={totalLabelStyle}>Total:</h2>
        <div className="text-right">
          {coupon > 0 && (
            <div className={totalValueStyle + " line-through"}>
              ${(subtotal + shippingFee).toFixed(2)}
            </div>
          )}
          <div className={totalValueStyle}>
            ${total.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricesTotal;