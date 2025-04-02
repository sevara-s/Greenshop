import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Badge } from "antd";
import {
  ShoppingCartOutlined,
  LoginOutlined,
  MenuOutlined,
  CloseOutlined,
  SearchOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { useReduxDispatch } from "../../hooks/useRedux";
import { setModalAuthorizationModalVisibility } from "../../redux/modalSlice";
import { useAxios } from "../../hooks/useAxios";
import { Link } from "react-router-dom";
import logo from "../../assets/svgs/logo.svg";
import { cookieInfo } from "../../generics/cookies";
import { useReduxSelector } from "../../hooks/useRedux";

const Header = () => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const axios = useAxios();
  const { getCookie, removeCookie } = cookieInfo();
    const { data } = useReduxSelector((state) => state.shopSlice);

  const navRoutes = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/blog", label: "Blog" },
    
  ];

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
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center gap-5">
          <MenuOutlined
            className="!text-[22px] cursor-pointer md:hidden !text-[#46a358]"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="h-[35px] sm:h-[40px]" />
          </Link>
        </div>

        <div className="md:hidden">
          <FilterOutlined
            className="!text-[22px] cursor-pointer !text-[#46a358]"
            onClick={() => setFilterOpen(!filterOpen)}
          />
        </div>

        <nav
          className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-[#46a358] p-5 transform transition-transform duration-300 z-50 overflow-y-auto md:relative md:flex md:items-center md:w-auto md:p-0 md:translate-x-0 md:bg-transparent md:overflow-visible ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <CloseOutlined
            className="!text-[15px] cursor-pointer mb-4 md:hidden !text-white"
            onClick={() => setMenuOpen(false)}
          />
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            {navRoutes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`cursor-pointer py-2 px-4 text-sm sm:text-base ${
                  pathname === route.path
                    ? "font-bold md:text-[#46a358] md:bg-transparent bg-[#3c8b4e] text-white"
                    : "md:text-gray-700 text-white opacity-90 hover:bg-[#3c8b4e] md:hover:bg-transparent md:hover:text-[#46a358] hover:opacity-100"
                } rounded-md transition-all duration-300 ease-in-out`}
                onClick={() => handleNavClick(route.path)}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Filter Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white p-5 shadow-lg transform transition-transform duration-300 z-40 ${
            filterOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <CloseOutlined
            className="!text-[15px] cursor-pointer mb-4 !text-[#46a358]"
            onClick={() => setFilterOpen(false)}
          />
          <h3 className="font-bold text-[#46a358] text-lg mb-4">Filters</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Categories</h4>
              <div className="space-y-2">
                {["House Plants", "Outdoor Plants", "Gardening Tools"].map(
                  (category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={category}
                        className="mr-2 h-4 w-4 text-[#46a358] rounded"
                      />
                      <label htmlFor={category}>{category}</label>
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Price Range</h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">$0</span>
                <span className="text-sm text-gray-600">$1000</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                className="w-full h-2 bg-[#46a358] rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <Button
              type="primary"
              className="!bg-[#46a358] !w-full !rounded-md"
              onClick={() => setFilterOpen(false)}
            >
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Desktop Icons and Login */}
        <div className="hidden md:flex items-center gap-3 sm:gap-5">
          <SearchOutlined className="!text-[22px] sm:!text-[25px] cursor-pointer text-[#46a358]" />

          <button onClick={() => handleNavClick("/products-shop")}>
            <Badge count={data.length} showZero>
              <ShoppingCartOutlined className="!text-[22px] sm:!text-[25px] cursor-pointer text-[#46a358]" />
            </Badge>
          </button>

          <Button
            onClick={handleLoginClick}
            className="!rounded-[6px] !bg-[#46a358] !text-sm sm:!text-base !text-white !font-medium hover:!bg-[#3a8a4a]"
            icon={<LoginOutlined className="!text-white" />}
          >
            {username ? username : "Login"}
          </Button>
        </div>

        {/* Overlay for Mobile */}
        {(menuOpen || filterOpen) && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
            onClick={() => {
              setMenuOpen(false);
              setFilterOpen(false);
            }}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;