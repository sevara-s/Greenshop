import { Form, Input, Button } from "antd";

//icon
import { LoadingOutlined } from "@ant-design/icons";

import { AddressType } from "../../../../@types";
import CookieUserInfo from "../../../../generic/cookies";
import { useEditAddress } from "../../../../hooks/useQueryHandler/useQueryActions";

const Address = () => {
  const grid_style_form_item =
    "grid grid-cols-2 gap-4 max-[585px]:grid-cols-1 max-[585px]:gap-2";

  const { getCookie, setCookie } = CookieUserInfo();
  const authUser = getCookie("user");
  const { mutate, isPending } = useEditAddress();
  const finish = (e: AddressType) => {
    mutate({ ...e, _id: authUser._id });
    setCookie("user", { ...authUser, ...e });
  };

  return (
    <div className="p-5 max-[500px]:p-0">
      <h2 className="text-xl font-semibold max-[400px]:text-sm">
        Billing Address
      </h2>
      <p className="text-gray-600 max-[500px]:hidden">
        The following addresses will be used on the checkout page by default.
      </p>

      <Form
        layout="vertical"
        onFinish={finish}
        initialValues={{
          name: authUser?.name,
          surname: authUser?.surname,
          country: authUser?.country,
          town: authUser?.town,
          street_address: authUser?.street_address,
          additional_street_address: authUser?.additional_street_address,
          state: authUser?.state,
          zip: authUser?.zip,
          email: authUser?.email,
          phone_number: authUser?.phone_number,
        }}
        className={grid_style_form_item}
      >
        <Form.Item
          name="name"
          label="First Name"
          rules={[{ required: true, message: "Please enter your first name" }]}
        >
          <Input placeholder="Enter your first name" />
        </Form.Item>

        <Form.Item
          name="surname"
          label="Last Name"
          rules={[{ required: true, message: "Please enter your last name" }]}
        >
          <Input placeholder="Enter your last name" />
        </Form.Item>

        <Form.Item
          name="country"
          label="Country / Region"
          rules={[{ required: true, message: "Please enter your country" }]}
        >
          <Input placeholder="Enter your country or region" />
        </Form.Item>

        <Form.Item
          name="town"
          label="Town / City"
          rules={[
            { required: true, message: "Please enter your town or city" },
          ]}
        >
          <Input placeholder="Enter your town or city" />
        </Form.Item>

        <Form.Item
          name="street_address"
          label="Street Address"
          rules={[
            { required: true, message: "Please enter your street address" },
          ]}
        >
          <Input placeholder="Enter your street address" />
        </Form.Item>

        <Form.Item name="additional_street_address" label="Additional Address">
          <Input placeholder="Enter additional address (optional)" />
        </Form.Item>

        <Form.Item
          name="state"
          label="State / Province"
          rules={[
            { required: true, message: "Please enter your state or province" },
          ]}
        >
          <Input placeholder="Enter your state or province" />
        </Form.Item>

        <Form.Item
          name="zip"
          label="Zip / Postal Code"
          rules={[{ required: true, message: "Please enter your zip code" }]}
        >
          <Input placeholder="Enter your zip code" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email address",
            },
          ]}
        >
          <Input placeholder="Enter your email address" />
        </Form.Item>

        <Form.Item
          name="phone_number"
          label="Phone Number"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-green-500 text-white"
          >
            {isPending ? <LoadingOutlined /> : "Place Order"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Address;
