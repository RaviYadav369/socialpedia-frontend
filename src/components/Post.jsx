import React from "react";
import { HiMiniUserPlus } from "react-icons/hi2";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import {BsShare} from 'react-icons/bs'
const Post = () => {
  return (
    <>
      <div className="w-full px-4 mt-3 mx-auto bg-white ">
        <div className="pt-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP4oKUXDbkuEQhaY-AMiOem8EaHZhBQglQQ&usqp=CAU"
            alt="photo"
            className="w-12 h-12 rounded-full inline"
          />
          <div className="inline-block relative w-11/12 ">
            <span className="text-lg p-2 font-semibold ">Ravi Yadav</span>
            <span className=" right-0 absolute">
              <HiMiniUserPlus className="text-2xl" />
            </span>
            <p className="text-xs ml-2">New Delhi India</p>
          </div>
        </div>
        <div className=" border pt-4">
          <div className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            corrupti, expedita ad, provident facere aut sapiente quam, commodi
            temporibus inventore beatae numquam laudantium.
          </div>
          <div className="h-[500px]">
            <img
              className="w-full h-full object-fill rounded-xl mt-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP4oKUXDbkuEQhaY-AMiOem8EaHZhBQglQQ&usqp=CAU"
              alt="post"
            />
          </div>
          <div className="p-2 border-t m-1 flex justify-between">
            <div className="gap-7 flex">

            <AiOutlineLike className="text-2xl" />
            <BiCommentDetail className="text-2xl" />
            </div>
            <div>
                <BsShare  className='text-xl' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
