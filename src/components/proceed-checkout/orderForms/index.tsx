import  { useEffect, useState } from 'react';
import { Form, Input, Radio, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useReduxSelector } from '../../../hooks/useRedux';
import { useMakeOrderList } from '../../../hooks/useQueryHandler/useQueryAction';
import { setModalAuthorizationModalVisibility } from '../../../redux/modalSlice';
import { cookieInfo } from '../../../generics/cookies';
import { AuthUser } from '../../../@types';

type FormFields = {
  name: string;
  surname: string;
  country: string;
  street: string;
  state: string;
  email: string;
  zip: string;
  appartment: string;
  town: string;
  phone_number: string;
  payment_method: string;
  comment?: string;
};

const ProductForms = () => {
  const [form] = Form.useForm<FormFields>();
  const [canSubmit, setCanSubmit] = useState(false);
  const dispatch = useDispatch();
  const { isAuthorization, getCookie } = cookieInfo();
  const user = getCookie("user") as AuthUser | undefined;
  const { data: cartItems, coupon } = useReduxSelector((state) => state.shopSlice);
  const { mutate: placeOrder, isLoading: isPlacingOrder } = useMakeOrderList();

  // Calculate order total
  const subtotal = cartItems.reduce((total, item) => total + item.userPrice, 0);
  const shippingFee = 16.00;
  const discount = coupon ? (subtotal * coupon) / 100 : 0;
  const orderTotal = subtotal + shippingFee - discount;

  // Watch form values to enable/disable submit button
  const formValues = Form.useWatch([], form);
  useEffect(() => {
    form.validateFields({ validateOnly: true })
      .then(() => setCanSubmit(true))
      .catch(() => setCanSubmit(false));
  }, [formValues]);

  const handleSubmit = (values: FormFields) => {
    if (!isAuthorization) {
      dispatch(setModalAuthorizationModalVisibility());
      return;
    }

    const orderData = {
      shop_list: cartItems,
      billing_address: {
        first_name: values.name,
        last_name: values.surname,
        country: values.country,
        street_address: values.street,
        state: values.state,
        email: values.email,
        zip: values.zip,
        additional_street_address: values.appartment,
        town: values.town,
        phone: values.phone_number,
      },
      extra_shop_info: {
        method: values.payment_method,
        total: orderTotal,
        note: values.comment,
      },
    };

    placeOrder(orderData);
  };

  // Radio button styling
  const radioStyle = `
    ant-radio-wrapper
    border border-[#46A358]
    w-full h-[40px]
    flex items-center pl-3
    rounded-lg
    mb-3
  `;

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{
        name: user?.name || '',
        surname: user?.surname || '',
        country: user?.billing_address?.country || '',
        street: user?.billing_address?.street_address || '',
        state: user?.billing_address?.state || '',
        email: user?.email || '',
        zip: user?.billing_address?.zip || '',
        appartment: user?.billing_address?.additional_street_address || '',
        town: user?.billing_address?.town || '',
        phone_number: user?.phone_number || '',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div>
          <Form.Item
            name="name"
            label="First Name"
            rules={[{ required: true, message: 'Please enter your first name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="country"
            label="Country/Region"
            rules={[{ required: true, message: 'Please select your country' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="street"
            label="Street Address"
            rules={[{ required: true, message: 'Please enter your street address' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="state"
            label="State"
            rules={[{ required: true, message: 'Please enter your state' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        {/* Right Column */}
        <div>
          <Form.Item
            name="surname"
            label="Last Name"
            rules={[{ required: true, message: 'Please enter your last name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="town"
            label="Town/City"
            rules={[{ required: true, message: 'Please enter your town/city' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="appartment"
            label="Apartment (Optional)"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="zip"
            label="ZIP Code"
            rules={[{ required: true, message: 'Please enter your ZIP code' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone_number"
            label="Phone"
            rules={[
              { required: true, message: 'Please enter your phone number' },
              { pattern: /^[0-9]+$/, message: 'Please enter only numbers' }
            ]}
          >
            <Input addonBefore="+998" />
          </Form.Item>
        </div>
      </div>

      {/* Payment Method */}
      <Form.Item
        name="payment_method"
        label="Payment Method"
        rules={[{ required: true, message: 'Please select a payment method' }]}
      >
        <Radio.Group className="w-full">
          <Radio className={radioStyle} value="other-payment-methods">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fpayment_collected_methods.png?alt=media&token=c4bfd991-..."
              alt="Payment methods"
              className="h-6 ml-2"
            />
          </Radio>
          <Radio className={radioStyle} value="direct-bank-transfer">
            Direct bank transfer
          </Radio>
          <Radio className={radioStyle} value="cash-on-delivery">
            Cash on delivery
          </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="comment"
        label="Order Notes (Optional)"
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <button
        type="submit"
        disabled={!canSubmit || isPlacingOrder}
        className={`
          w-full bg-[#46A358] text-white py-3 rounded-md mt-4
          ${(!canSubmit || isPlacingOrder) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3a8a4a]'}
        `}
      >
        {isPlacingOrder ? (
          <Spin indicator={<LoadingOutlined style={{ color: '#fff' }} spin />} />
        ) : (
          'Place Order'
        )}
      </button>
    </Form>
  );
};

export default ProductForms;