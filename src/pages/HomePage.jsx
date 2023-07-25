import React from "react";
import Navbar from "../components/Navbar";
import { CiLocationOn } from "react-icons/ci";
import { GrDocumentText } from "react-icons/gr";
import { HiPencil } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { TbUsersPlus } from "react-icons/tb";
import {
  BsMessenger,
  BsFillQuestionCircleFill,
  BsBellFill,
} from "react-icons/bs";
import Post from "../components/Post";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="grid grid-cols-4 mt-24">
          <div className="col-span-1 h-[400px] flex justify-end ">
            <div className=" bg-white w-4/5 p-2 rounded-lg">
              <div className="border-b-2">
                <div className="w-12 h-12 mx-auto mb-2">
                  <img
                    className="w-full h-full rounded-full"
                    alt="photo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP4oKUXDbkuEQhaY-AMiOem8EaHZhBQglQQ&usqp=CAU"
                  />
                </div>
              </div>
              <div className="my-3 border-b-2">
                <p className="p-2 text-sm">
                  <CiLocationOn className="inline text-xl" /> New Delhi, India
                </p>
                <p className="p-2 text-sm">
                  <GrDocumentText className="inline text-lg" /> Software
                  Engineer at MSME
                </p>
              </div>
              <div className="my-3 border-b-2">
                <p className="p-2 relative text-sm">
                  Who's viewed your profile
                  <p className="absolute right-2 top-2">1355</p>
                </p>
                <p className="p-2 relative text-sm">
                  Impresstion of your post
                  <p className="absolute right-2 top-2">15432</p>
                </p>
              </div>
              <div className="my-3 border-b-2">
                <h2 className="font-semibold">Social Profiles</h2>
                <p className="p-2 relative text-sm">
                  <FaTwitter className="inline text-lg mr-1" />
                  Who's viewed your profile
                  <HiPencil className="absolute right-2 top-2 text-lg" />
                </p>
                <p className="p-2 relative text-sm">
                  <AiFillLinkedin className="inline text-lg mr-1" />
                  Impresstion of your post
                  <HiPencil className="absolute right-2 top-2 text-lg" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="w-11/12 mx-auto bg-white p-2 rounded-lg">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP4oKUXDbkuEQhaY-AMiOem8EaHZhBQglQQ&usqp=CAU"
                  alt="photo"
                  className="w-10 h-10 rounded-full inline"
                />
                <input
                  type="text"
                  placeholder="Start the Post"
                  className="rounded-full border font-semibold  border-black p-2 m-1 w-11/12 "
                />
                <div className="mt-2 p-2">
                  <ul className="flex items-center justify-around">
                    <li className="font-semibold ">
                      <TbUsersPlus className="inline text-xl" /> Photo
                    </li>
                    <li className="font-semibold">
                      <BsMessenger className="inline text-xl" /> Video
                    </li>
                    <li className="font-semibold">
                      <BsBellFill className="inline text-xl" /> Event
                    </li>
                    <li className="font-semibold">
                      <BsFillQuestionCircleFill className="inline text-xl" />{" "}
                      Write Article
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-11/12 bg-white rounded-lg mx-auto mt-2">
              <Post />
            </div>
            <div className="w-11/12 bg-white rounded-lg mx-auto mt-2">
              <Post />  
            </div>
            <div className="w-11/12 bg-white rounded-lg mx-auto mt-2">
              <Post />  
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white w-4/5 p-2 rounded-lg">
              <h2 className="font-semibold text-xl ">Sponsers</h2>
              <div className="p-2 mt-2">
                <img
                  className="w-full h-full object-contain"
                  alt="sponsers"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP4oKUXDbkuEQhaY-AMiOem8EaHZhBQglQQ&usqp=CAU"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
