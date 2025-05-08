import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const ProfileComponent = () => {
  return (
    <div className="grid grid-cols-[1fr_4fr] container2 gap-5 py-4 max-[550px]:gap-2">
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileComponent;
