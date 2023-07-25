import React from "react";
import { BiSearch } from "react-icons/bi";
import { TbUsersPlus } from "react-icons/tb";
import {
  BsMessenger,
  BsFillQuestionCircleFill,
  BsBellFill,
} from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <div className="relative">
        <div className="flex w-full fixed z-10 top-0  justify-between p-4 bg-white">
          <div className="w-1/4">
            <h2 className="p-1 px-5 font-bold text-2xl text-cyan-400">
              Socialpedia
            </h2>
          </div>
          <div className="w-2/4 relative">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 font-semibold text-md w-2/4 border rounded-2xl hover:border-black"
            />
            <BiSearch className="inline text-2xl left-80 absolute top-2" />
          </div>
          <div className="w-1/4 mt-2">
            <ul className="flex gap-8 items-center justify-center">
              <li className="text-xl">
                <MdLightMode />
              </li>
              <li className="text-xl">
                <TbUsersPlus />
              </li>
              <li className="text-xl">
                <BsMessenger />
              </li>
              <li className="text-xl">
                <BsBellFill />
              </li>
              <li className="text-xl">
                <BsFillQuestionCircleFill />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
