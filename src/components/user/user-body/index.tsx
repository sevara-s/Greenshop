import { useState } from "react";

import { UserBodyTitleType } from "../../../@types";
import About from "./about";
import Products from "./products";
import Posts from "./posts";
import Likes from "./likes";
import Followers from "./followers";

const UserBody = () => {
  const user_body_title: UserBodyTitleType[] = [
    { id: "1", title: "About", Component: About },
    { id: "2", title: "Products", Component: Products },
    { id: "3", title: "Posts", Component: Posts },
    { id: "4", title: "Likes", Component: Likes },
    { id: "5", title: "Followers", Component: Followers },
  ];

  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="py-5">
      {/* Custom tab buttons */}
      <div className="flex border-b">
        {user_body_title.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`px-4 py-2 text-lg font-medium transition-all border-b-2 ${
              activeTab === id
                ? "text-primary border-primary"
                : "text-gray-600 border-transparent"
            }`}
          >
            {title}
          </button>
        ))}
      </div>

     
      <div className="mt-4">
        {user_body_title.map(
          ({ id, Component }) => activeTab === id && <Component key={id} />
        )}
      </div>
    </div>
  );
};

export default UserBody;
