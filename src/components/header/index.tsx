import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Badge } from "antd";
import {
  ShoppingCartOutlined,
  LoginOutlined,
  MenuOutlined,
  CloseOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useReduxDispatch } from "../../hooks/useRedux";
import { setModalAuthorizationModalVisibility } from "../../redux/modalSlice";
import { useAxios } from "../../hooks/useAxios";
import notificationApi from "../../generics/notification";
import { Link } from "react-router-dom";
import logo from "../../assets/svgs/logo.svg";
import { cookieInfo } from "../../generics/cookies";

const Header = () => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const axios = useAxios();
  const { notify } = notificationApi();
  const { getCookie, setCookie, removeCookie } = cookieInfo();

  useEffect(() => {
    const token = getCookie("auth_token");
    if (token) {
      axios({
        url: "user/profile",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          setUsername(response.data.username);
        })
        .catch(() => {
          setUsername(null);
          removeCookie("auth_token");
        });
    }
  }, [axios]);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleLoginClick = () => {
    if (!username) {
      dispatch(setModalAuthorizationModalVisibility());
    } else {
      removeCookie("auth_token");
      setUsername(null);
    }
    setMenuOpen(false);
  };

  return (
    <header className="header p-4 border-b border-[#96d7a3] bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <MenuOutlined
            className="!text-[22px] cursor-pointer md:hidden !text-[#46a358]"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="h-[35px] sm:h-[40px]" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`fixed top-0 left-0 h-full w-full bg-[#46a358] p-5 transform transition-transform duration-300 md:relative md:flex md:items-center md:w-auto md:p-0 md:translate-x-0 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <CloseOutlined
            className="!text-[15px] cursor-pointer mb-4 md:hidden !text-white"
            onClick={() => setMenuOpen(false)}
          />
          <div className="flex flex-col md:flex-row md:gap-6">
            {["/", "/blog", "/shop"].map((path) => (
              <Link
                key={path}
                to={path}
                className={`cursor-pointer py-2 px-4 text-sm sm:text-base text-white transition-all duration-300 ease-in-out ${
                  pathname === path
                    ? "font-bold bg-[#3c8b4e]"
                    : "opacity-90 hover:bg-[#3c8b4e] hover:opacity-100 rounded-md"
                }`}
                onClick={() => handleNavClick(path)}
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() +
                    path.slice(2)}
              </Link>
            ))}

            <div className="flex flex-col gap-4 mt-4 md:hidden">
              <button
                className="flex items-center gap-2 text-white opacity-90"
                onClick={() => handleNavClick("/shop")}
              >
                <ShoppingCartOutlined className="!text-[20px]" />
                <span>Cart</span>
              </button>
              <button
                className="flex items-center gap-2 text-white opacity-90"
                onClick={() => setMenuOpen(false)}
              >
                <SearchOutlined className="!text-[20px]" />
                <span>Search</span>
              </button>
              <button
                className="flex items-center gap-2 text-white opacity-90"
                onClick={handleLoginClick}
              >
                <LoginOutlined className="!text-[20px]" />
                <span>{username ? username : "Login"}</span>
              </button>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3 sm:gap-5">
          <SearchOutlined className="!text-[22px] sm:!text-[25px] cursor-pointer" />

          <button onClick={() => handleNavClick("/shop")}>
            <Badge count={0} showZero>
              <ShoppingCartOutlined className="!text-[22px] sm:!text-[25px] cursor-pointer" />
            </Badge>
          </button>

          <Button
            onClick={handleLoginClick}
            className="!rounded-[6px] !bg-[#46a358] !text-sm sm:!text-base !text-white !font-medium"
            icon={<LoginOutlined className="!text-white" />}
          >
            {username ? username : "Login"}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
