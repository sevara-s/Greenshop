import { Modal } from "antd"; 

//icon
import { LogoutOutlined } from "@ant-design/icons";

import { path_profile } from "../../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import CookieUserInfo from "../../../generic/cookies";

const Sidebar = () => {
  const { pathname } = useLocation();
  const pathnameSecond = pathname.slice(9);
  const { removeCookie } = CookieUserInfo();
  const navigate = useNavigate();

  const handleLogout = () => {
    Modal.confirm({
      title: "Are you sure you want to log out?",
      content: "Your session will be ended.",
      okText: "Yes",
      cancelText: "No",
      onOk: () => {
        removeCookie("user");
        navigate("/"); 
      },
    });
  };

  return (
    <div className="bg-[#fbfbfb] p-4 w-64 max-w-[70px] md:max-w-[250px] transition-all duration-300 flex flex-col items-center md:items-start">
      <h1 className="font-bold text-xl hidden md:block">My Account</h1>

      <div className="my-3 space-y-2 text-gray-700 flex flex-col w-full">
        {path_profile.map(({ Icon, id, title, path }) => (
          <div
            onClick={() => navigate(`/profile/${path}`)}
            key={id}
            className={`flex items-center gap-3 p-3 text-[18px] cursor-pointer rounded-md transition-all w-full hover:bg-gray-100 
              ${
                path === pathnameSecond
                  ? "md:border-l-4 md:border-primary md:bg-white text-primary"
                  : "bg-white"
              }`}
          >
            <Icon/>
            <h3 className="hidden md:block">{title}</h3>
          </div>
        ))}
      </div>

      <div className="mt-auto border-t pt-3 border-primary w-full">
        <div
          className="flex items-center gap-3 text-red-600 cursor-pointer p-2 hover:text-red-700 w-full"
          onClick={handleLogout} 
        >
          <LogoutOutlined className="text-xl" />
          <p className="hidden md:block">Log out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
