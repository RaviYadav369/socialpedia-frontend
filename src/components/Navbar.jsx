import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { TbUsersPlus } from "react-icons/tb";
import {
  BsMessenger,
  BsFillQuestionCircleFill,
  BsBellFill,
} from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaSleigh, FaUserAlt } from "react-icons/fa";
import { signIn, signOut, signUp } from "../store/reducers/auth/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/reducers/user/user.action";

const LargeNav = ({ user, isDropDown, setisDropDown }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SignIn = () => {
    // dispatch(signIn());
    setisDropDown(false);
  };
  const SignUp = () => {
    // dispatch(signUp());
    setisDropDown(false);
  };
  const SignOut = () => {
    dispatch(signOut());
    dispatch(clearUser());
    navigate("/feed");
    setisDropDown(false);
  };

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
                <div className="flex items-center gap-3 relative">
                  {user?.firstName ? (
                    <>
                      <div
                        onClick={() => setisDropDown((prev) => !prev)}
                        className="border  rounded-full w-10 h-10 "
                      >
                        {/* <img
                          src={user?.picturePath}
                          alt="user"
                          className="w-full h-full object-contain rounded-full"
                        /> */}
                        <img
                          src="https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg"
                          alt="avatar"
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                      {isDropDown && (
                        <div className="absolute shadow-lg py-3 -bottom-16 -right-0  w-32 bg-white z-20 flex flex-col gap-3 border border-gray-100">
                          <button onClick={SignOut}>Sign Out</button>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <span
                        onClick={() => setisDropDown((prev) => !prev)}
                        className="border p-2 border-gray-600 rounded-full h-10 w-10 "
                      >
                        <FaUserAlt className="object-contain w-full h-full rounded-full" />
                      </span>
                      {isDropDown && (
                        <div className="absolute shadow-lg py-3 -bottom-24 -right-4 w-32 z-20 bg-white flex flex-col gap-3 border border-gray-100">
                          <Link to="/login">
                            <button onClick={SignIn}>Sign In</button>
                          </Link>
                          <Link to="/register">
                            <button onClick={SignOut}>Sign Up</button>
                          </Link>
                        </div>
                      )}
                    </>
                  )}
                </div>
                {/* <Link to={`/profile/${userId}`} >
                  <div className="h-10  w-10">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP4oKUXDbkuEQhaY-AMiOem8EaHZhBQglQQ&usqp=CAU"
                      className="rounded-full w-full h-full object-contain"
                      alt="photo"
                    />
                  </div>
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
const Navbar = () => {
  const [isDropDown, setisDropDown] = useState(false);

  // const user = {
  //   // firstName: "Ravi",
  // };
  const user = useSelector((globalstate) =>
    globalstate.auth.user ? globalstate.auth.user : globalstate.user
  );
  // console.log(user);
  return (
    <>
      <LargeNav
        user={user}
        isDropDown={isDropDown}
        setisDropDown={setisDropDown}
      />
    </>
  );
};

export default Navbar;
