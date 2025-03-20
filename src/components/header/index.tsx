import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Button, Badge } from "antd";

// svg logo import
import logo from "../../assets/svgs/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();  

  return (
    <header className="header p-[25px] border-b border-[#96d7a3] ">
      <div className="container flex item justify-between">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

        <div className="nav_links flex items-center gap-[25px]">
          <Link
            to={"/"}
            className={`cursor-pointer ${
              pathname === "/" ? "text-[#46a358]" : "text-[#3d3d3d]"
            }`}
          >
            Home
          </Link>
          <Link
            to={"/blog"}
            className={`cursor-pointer ${
              pathname === "/blog" ? "text-[#46a358]" : "text-[#3d3d3d]"
            }`}
          >
            Blog
          </Link>
        </div>

        <div className="header_btns flex items-center gap-[30px]">
          <SearchOutlined className="!text-[25px] !cursor-pointer" />

          <button onClick={() => navigate("/shop")}>
            <Badge count={0} showZero>
              <ShoppingCartOutlined className="!text-[25px] !cursor-pointer" />
            </Badge>
          </button>

          <Button
            className="!rounded-[6px] !bg-[#46a358] !text-[16px] !text-[#fff] !font-[500]"
            icon={<LoginOutlined className="!text-[#fff]" />}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
