import {
  HomeIcon,
  PaperAirplaneIcon,
  SearchIcon,
  UserGroupIcon,
  PlusCircleIcon,
  HeartIcon,
} from "@heroicons/react/outline";

import {
  HomeIcon as HomeFilled,
  PaperAirplaneIcon as PaperAirplaneFiled,
  UserGroupIcon as UserGroupFilled,
  PlusCircleIcon as PlusCircleFiled,
  HeartIcon as HeartFilled,
  XCircleIcon,
} from "@heroicons/react/solid";
import { useRef } from "react";

function Header() {
  const searchRef = useRef();

  return (
    <div className="flex bg-white w-full border-b">
      <div className="flex justify-between max-w-[60rem] w-full items-center py-3 border-gray-400 mx-auto px-3 lg:px-0">
        {/* Logo */}
        <div className="cursor-pointer mt-1">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
        </div>

        {/* SearchBar */}
        <div className="md:flex rounded-md py-2 items-center border px-2 text-sm space-x-1 border-gray-300 bg-white hidden group w-60">
          <SearchIcon className="h-3 text-gray-400 group-focus-within:hidden" />
          <input
            ref={searchRef}
            className="outline-none bg-transparent flex-grow"
            placeholder="Search"
            type="text"
          />
          <XCircleIcon
            onClick={function () {
              searchRef.current.value = "";
            }}
            className="hidden h-4 text-gray-400 group-focus-within:inline-flex"
          />
        </div>
        {/* Link Icon */}
        <div className="flex space-x-5">
          <HomeFilled className="icon" />
          <PaperAirplaneIcon className="icon rotate-45" />
          <PlusCircleIcon className="icon" />
          <UserGroupIcon className="icon" />
          <HeartIcon className="icon" />
          <img
            className="h-7 w-7 object-cover rounded-full cursor-pointer"
            src="/ava.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
