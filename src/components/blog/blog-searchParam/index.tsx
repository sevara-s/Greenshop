import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

import { useSearchParamsHandler } from "../../../hooks/useSearchParams";

const BlogSearch = () => {
  const { setParam } = useSearchParamsHandler();
  const [searchText, setSearchText] = useState("");

  const onSearch = () => {
    if (searchText.trim()) {
      setParam({ search: searchText });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div>
      <h1 className="text-xl text-center font-semibold pb-3">My Feed</h1>
      <div className="flex justify-between items-center h-[35px] overflow-hidden rounded-md border border-primary w-[70%] mx-auto max-[500px]:w-[90%]">
        <input
          type="text"
          placeholder="Enter search text"
          className="h-full w-[70%] outline-none px-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={onSearch}
          className="h-full px-[20px] text-white bg-primary border-l border-primary transition-all duration-300 hover:bg-transparent hover:text-primary"
        >
          <SearchOutlined />
        </button>
      </div>
    </div>
  );
};

export default BlogSearch;
