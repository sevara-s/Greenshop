import { Form, Input, Radio } from "antd";

//img
import img from "../../../assets/img/payment.png";

//icon
import { LoadingOutlined } from "@ant-design/icons";

import CookieUserInfo from "../../../generic/cookies";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setModalAuthVisibility } from "../../../redux/modalSlice";
import { AuthUser, MakeOrderType } from "../../../@types";
import { useMakeOrder } from "../../../hooks/useQueryHandler/useQueryActions";
const ProceedForm = () => {
  const { isAuthorization, getCookie } = CookieUserInfo();
  const dispatch = useReduxDispatch();
  const auth: AuthUser | null = getCookie("user"); // auth null bo'lishi mumkinligini belgilash
  const { data, coupon } = useReduxSelector((state) => state.shopSlice);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 16);
  const total = coupon ? totalPrice - (totalPrice * coupon) / 100 : totalPrice;
  const { mutate, isPending } = useMakeOrder();
  const order = (e: MakeOrderType) => {
    const makeOrder = {
      shop_list: data,
      billing_address: e,
      extra_shop_info: {
        method: e.payment_method,
        total,
      },
    };
    mutate(makeOrder);
  };
  const Radiostyle =
    "bordant-radio-wrapper antd-radio-wrappper-checked antd-radio-wrapper-in-form-item border border-primary w-full h-[40px] mb-3 flex items-center pl-[10px]  rounded-lg css-k7429zer";
  return (
    <div>
      <Form
        layout="vertical"
        onFinish={order}
        fields={[
          { name: "name", value: auth?.name ?? "" },
          { name: "surname", value: auth?.surname ?? "" },
          { name: "country", value: auth?.billing_address?.country ?? "" },
          { name: "street", value: auth?.billing_address?.street_address ?? "" },
          { name: "state", value: auth?.billing_address?.state ?? "" },
          { name: "email", value: auth?.email ?? "" },
          { name: "zip", value: auth?.billing_address?.zip ?? "" },
          { name: "appartment", value: auth?.billing_address?.additional_street_address ?? "" },
          { name: "town", value: auth?.billing_address?.town ?? "" },
          { name: "phone_number", value: auth?.phone_number ?? "" },
        ]}
      >
        <div className="grid grid-cols-2 gap-5 max-[450px]:grid-cols-1">
          <div>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input placeholder="Type your first name..." />
            </Form.Item>
            <Form.Item
              name="country"
              label="Country / Region"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your first country..." />
            </Form.Item>
            <Form.Item
              name="street"
              label="Street Address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your first street name..." />
            </Form.Item>
            <Form.Item name="state" label="State" rules={[{ required: true }]}>
              <Input placeholder="Type your first state..." />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your first email address..." />
            </Form.Item>
            <Form.Item
              name="payment_method"
              label="Payment Method"
              rules={[
                { required: true, message: "Please enter payment methods" },
              ]}
            >
              <Radio.Group className="w-full">
                <Radio className={Radiostyle} value={"order-payment-methods"}>
                  <img src={img} alt="" />
                </Radio>
                <Radio className={Radiostyle} value={"dorect-bank-transfer"}>
                  Dorect bank transfer
                </Radio>
                <Radio className={Radiostyle} value={"cash-on-delivery"}>
                  Cash on delivery
                </Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="LastName"
              label="Last Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your first last-name..." />
            </Form.Item>
            <Form.Item
              name="town"
              label="Town / City"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your first Town / City..." />
            </Form.Item>
            <Form.Item name="" label=" " rules={[{ required: true }]}>
              <Input placeholder="Appartment, suite, unit" />
            </Form.Item>
            <Form.Item name="Zip" label="Zip" rules={[{ required: true }]}>
              <Input placeholder="Type your first Zip..." />
            </Form.Item>
            <Form.Item
              name="phone-number"
              label="Phone Number"
              rules={[{ required: true }]}
            >
              <Input
                addonBefore="+998"
                placeholder="Type your first phone number..."
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          name="comment"
          label="Comment"
          rules={[{ required: true, message: "Please enter Comment" }]}
        >
          <Input.TextArea rows={10} />
        </Form.Item>
        <button
          onClick={() => {
            if (!isAuthorization) {
              dispatch(setModalAuthVisibility());
            }
          }}
          className="bg-primary text-white font-medium flex items-center gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary w-full justify-center"
        >
          {isPending ? <LoadingOutlined /> : "  Place Order"}
        </button>
      </Form>
    </div>
  );
};

export default ProceedForm;
