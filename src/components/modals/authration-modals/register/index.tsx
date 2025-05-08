import { Input, Form } from "antd";

import { FieldRegisterType } from "../../../../@types";
import {
  useRegisterMutation,
  useRegisterWithGoogle,
} from "../../../../hooks/useQueryHandler/useQueryActions";

//icon
import { LoadingOutlined } from "@ant-design/icons";
import google from "../../../../assets/icons/google.svg";
import facebook from "../../../../assets/icons/facebook.svg";

const Register = () => {
  const { mutate, isPending } = useRegisterMutation();
  const register = (e: FieldRegisterType) => {
    mutate(e);
  };
  const { mutate: RegisterWithGoogle } = useRegisterWithGoogle();
  return (
    <div>
      <div className="w-[95%] mx-auto">
        <p className="py-2 pt-6">Enter your username and password to login.</p>
        <Form
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={register}
        >
          <Form.Item<FieldRegisterType>
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              className="!pl-3 !border !border-[#eaeaea] !rounded-[5px] !h-[40px] !w-full focus:!border-primary focus:!outline-none !transition-all !duration-300"
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item<FieldRegisterType>
            name="surname"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              className="!pl-3 !border !border-[#eaeaea] !rounded-[5px] !h-[40px] !w-full focus:!border-primary focus:!outline-none !transition-all !duration-300"
              placeholder="Surname"
            />
          </Form.Item>
          <Form.Item<FieldRegisterType>
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              className="!pl-3 !border !border-[#eaeaea] !rounded-[5px] !h-[40px] !w-full focus:!border-primary focus:!outline-none !transition-all !duration-300"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item<FieldRegisterType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              className="!pl-3 !border !border-[#eaeaea] !rounded-[5px] !h-[40px] !w-full focus:!border-primary focus:!outline-none !transition-all !duration-300"
              placeholder="Password"
            />
          </Form.Item>

          <button className="bg-primary w-full text-white font-medium flex items-center justify-center gap-2 h-[45px] rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary">
            {isPending ? <LoadingOutlined /> : "   Register"}
          </button>
        </Form>
        <div className="flex items-center gap-2 w-full py-5">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-gray-500 text-sm">Or register with</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button
          onClick={() => RegisterWithGoogle()}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md h-[45px] transition-all duration-300 hover:bg-gray-100"
        >
          <img src={google} alt="Google" className="w-5 h-5" />
          <span className="text-gray-600 font-medium">
            Continue with Google
          </span>
        </button>

        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md h-[45px] mt-3 transition-all duration-300 hover:bg-gray-100">
          <img src={facebook} alt="Facebook" className="w-5 h-5" />
          <span className="text-gray-600 font-medium">
            Continue with Facebook
          </span>
        </button>
      </div>
    </div>
  );
};

export default Register;
