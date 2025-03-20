import {Input,Button} from "antd"

import google from "../../../../assets/svgs/google.svg"
import facebook from "../../../../assets/svgs/facebook.svg"


const Login = () => {
  return (
    <>
      <div className="w-[90%] m-auto">
        <p className="pt-4">Enter your username and password to login</p>{" "}
        <div className="w-[90%]">
          <form className="mt-2 flex  flex-col gap-5">
            <Input
              className="border-[#EAEAEA] h-[48px] hover:border-[#46A358] focus:border-[#46A358] !bg-transparent"
              placeholder="enter your email"
            />
            <Input.Password
              className="border-[#EAEAEA] h-[48px] hover:border-[#46A358] focus:border-[#46A358] !bg-transparent"
              placeholder="enter your password"
            />
            <p className="text-end text-[#46A358] text-[15px] cursor-pointer hover:underline">
              Forgot password ?
            </p>
            <Button className="!bg-[#46A358] !w-full !h-[40px] !rounded-md !text-white !mt-2 !text-[18px] !opacity-100 ">
              Login
            </Button>
          </form>
          <div className="flex items-center justify-center mt-5 mb-5 gap-4">
            <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
            <p className="w-[40%]text-[#3D3D3D] text-[13px]">Or login with</p>
            <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <button className="border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer w-full">
              <img src={google} alt="google" />
              Login with Google
            </button>
            <button className="border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer w-full">
              <img src={facebook} alt="facebook" />
              Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
