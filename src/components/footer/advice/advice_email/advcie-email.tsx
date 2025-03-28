import { Form, Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const AdvcieEmail = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <h1 className="font-bold text-lg md:text-xl mb-5 text-[#3D3D3D]">
        Would you like to join newsletters?
      </h1>
      
      <Form className="flex flex-col sm:flex-row gap-2 w-full">
        <Form.Item
          name="email"
          className="w-full sm:w-3/4 mb-0"
          rules={[
            {
              type: "email",
              message: "Please enter a valid email address",
            },
            {
              required: true,
              message: "Email is required",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="text-[#727272]" />}
            placeholder="Enter your email address..."
            className="h-10 md:h-12 rounded-lg sm:rounded-r-none"
            size="large"
          />
        </Form.Item>
        
        <Button
          htmlType="submit"
          className="h-10 md:h-12 bg-[#46A358] hover:bg-[#3d8a4a] text-white 
                    rounded-lg sm:rounded-l-none w-full sm:w-1/4 flex items-center 
                    justify-center gap-1 text-base font-medium"
        >
          Join
        </Button>
      </Form>
      
      <p className="mt-4 text-sm text-[#727272] leading-6">
        We usually post offers and challenges in newsletter. We're your online
        houseplant destination. We offer a wide range of houseplants and
        accessories shipped directly from our (green)house to yours!
      </p>
    </div>
  );
};

export default AdvcieEmail;