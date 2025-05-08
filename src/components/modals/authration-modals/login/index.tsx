import { Form, Input } from "antd";
import { FieldType } from "../../../../@types";

//icon
import { LoadingOutlined } from "@ant-design/icons";
import google from "../../../../assets/icons/google.svg";
import facebook from "../../../../assets/icons/facebook.svg";

import { useLoginMutation, useLoginWithGoogle } from "../../../../hooks/useQueryHandler/useQueryActions";


const Login = () => {
  const { mutate, isPending } = useLoginMutation();
  const login = (e: FieldType) => {
    mutate(e);
  };

  const {mutate:loginWithMutate}=useLoginWithGoogle()

  return (
    <div>
      <div className="w-[95%] mx-auto">
        <p className="py-2 pt-6">Enter your username and password to login.</p>
        <Form
          onFinish={login}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              className="!pl-3 !border !border-[#eaeaea] !rounded-[5px] !h-[40px] !w-full focus:!border-primary focus:!outline-none !transition-all !duration-300"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              className="!pl-3 !border !border-[#eaeaea] !rounded-[5px] !h-[40px] !w-full focus:!border-primary focus:!outline-none !transition-all !duration-300"
              placeholder="Password"
            />
          </Form.Item>
          <p className="text-primary text-end py-2 max-[400px]:py-1">Forgot Password?</p>

          <button disabled={isPending} className="bg-primary w-full text-white font-medium flex items-center justify-center gap-2 h-[45px] rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary">
            {isPending ? <LoadingOutlined /> : "Login"}
          </button>
        </Form>
        <div className="flex items-center gap-2 w-full py-5 max-[400px]:py-3">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-gray-500 text-sm">Or login with</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button onClick={()=>loginWithMutate()} className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md h-[45px] transition-all duration-300 hover:bg-gray-100">
          <img src={google} alt="Google" className="w-5 h-5" />
          <span className="text-gray-600 font-medium">Login with Google</span>
        </button>

        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md h-[45px] mt-3 max-[400px]:mt-2 transition-all duration-300 hover:bg-gray-100">
          <img src={facebook} alt="Facebook" className="w-5 h-5" />
          <span className="text-gray-600 font-medium">Login with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
