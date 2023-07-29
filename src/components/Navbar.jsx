import React from "react";
import { BiSearch } from "react-icons/bi";
import { TbUsersPlus } from "react-icons/tb";
import {
  BsMessenger,
  BsFillQuestionCircleFill,
  BsBellFill,
} from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const userId =2;
  return (
    <>
      <div className="relative">
        <div className="flex w-full fixed z-10 top-0  justify-between p-4 bg-white">
          <div className="w-1/4">
            <h2 className="p-1 px-5 font-bold text-2xl text-cyan-400">
              <Link to="/feed">Socialpedia</Link>
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
                <Link to="/friends">
                  <TbUsersPlus />
                </Link>
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
              <li className="">
                <Link to={`/profile/${userId}`} >
                  <div className="h-10  w-10">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP4oKUXDbkuEQhaY-AMiOem8EaHZhBQglQQ&usqp=CAU"
                      className="rounded-full w-full h-full object-contain"
                      alt="photo"
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
