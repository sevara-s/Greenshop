import { Input, Button } from "antd";
import { useRef } from "react";
import type { InputRef } from "antd";
import google from "../../../../assets/svgs/google.svg";
import facebook from "../../../../assets/svgs/facebook.svg";
import { useRegisterMutate, useRegisterWithGoogle } from "../../../../hooks/useQueryHandler/useQueryAction";

interface RegisterData {
  name: string;
  surname: string; // Added surname field
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const { mutate: registerMutate } = useRegisterWithGoogle();
  const refName = useRef<InputRef>(null);
  const refSurname = useRef<InputRef>(null); // Added surname ref
  const refEmail = useRef<InputRef>(null);
  const refPassword = useRef<InputRef>(null);
  const refConfirmPassword = useRef<InputRef>(null);

  const { mutate, isLoading } = useRegisterMutate();

  const register = (e: React.FormEvent) => {
    e.preventDefault();

    const password = refPassword.current?.input?.value || "";
    const confirmPassword = refConfirmPassword.current?.input?.value || "";

    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const data: RegisterData = {
      name: refName.current?.input?.value || "",
      surname: refSurname.current?.input?.value || "", // Added surname
      email: refEmail.current?.input?.value || "",
      password,
      confirmPassword,
    };

    mutate(data);
  };

  return (
    <div className="w-[90%] m-auto">
      <p className="pt-4">Enter your username and password to register</p>
      <div className="w-[90%]">
        <form onSubmit={register} className="mt-2 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <Input
              ref={refName}
              type="text"
              name="name"
              className="border-[#EAEAEA] h-[48px] hover:border-[#46A358] focus:border-[#46A358] !bg-transparent"
              placeholder="First name"
              required
            />
            <Input
              ref={refSurname}
              type="text"
              name="surname"
              className="border-[#EAEAEA] h-[48px] hover:border-[#46A358] focus:border-[#46A358] !bg-transparent"
              placeholder="Last name"
              required
            />
          </div>
          <Input
            ref={refEmail}
            type="email"
            name="email"
            className="border-[#EAEAEA] h-[48px] hover:border-[#46A358] focus:border-[#46A358] !bg-transparent"
            placeholder="Enter your email"
            required
          />
          <Input.Password
            ref={refPassword}
            type="password"
            className="border-[#EAEAEA] h-[48px] hover:border-[#46A358] focus:border-[#46A358] !bg-transparent"
            placeholder="Enter your password"
            required
          />
          <Input.Password
            ref={refConfirmPassword}
            type="password"
            className="border-[#EAEAEA] h-[48px] hover:border-[#46A358] focus:border-[#46A358] !bg-transparent"
            placeholder="Confirm your password"
            required
          />
          <Button
            htmlType="submit"
            className="!bg-[#46A358] !w-full !h-[40px] !rounded-md !text-white !mt-2 !text-[18px] !opacity-100"
            loading={isLoading}
          >
            Register
          </Button>
        </form>

        <div className="flex items-center justify-center mt-5 mb-5 gap-4">
          <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
          <p className="w-[40%] text-[#3D3D3D] text-[13px]">Or register with</p>
          <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <button 
            onClick={() => registerMutate()} 
            className="border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer w-full"
          >
            <img src={google} alt="google" />
            Register with Google
          </button>
          <button className="border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer w-full">
            <img src={facebook} alt="facebook" />
            Register with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;