import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/reducers/user/user.action";
import { useParams } from "react-router-dom";
import { getUserPost } from "../store/reducers/post/post.action";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  let post = useSelector((globalstate) => globalstate.post);
  useEffect(() => {
    dispatch(getUser(post.userId))
    dispatch(getUserPost(params.userId))
    
  }, [])
  
  const profileUser = useSelector((globalstate) => globalstate.user);

  return (
    <>
      <Navbar />
      <div className="">
        <div className="grid grid-cols-3 mt-24">
          <div className="col-span-1 h-[400px] flex justify-end ">
            <div className=" bg-white w-4/5 p-2 rounded-lg">
              <div className="border-b-2">
                <div className="w-12 h-12 mx-auto ">
                  <img
                    className="w-full h-full rounded-full"
                    alt="photo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP4oKUXDbkuEQhaY-AMiOem8EaHZhBQglQQ&usqp=CAU"
                  />
                </div>
                <h2 className="text-center text-xl p-1 font-semibold">{`${profileUser.firstName} ${profileUser.lastName}`}</h2>
              </div>
              <div className="my-3 border-b-2">
                <p className="p-2 text-sm">
                  <CiLocationOn className="inline text-xl" />{" "}
                  {profileUser.location}
                </p>
                <p className="p-2 text-sm">
                  <GrDocumentText className="inline text-lg" />{" "}
                  {profileUser.occupation}
                </p>
              </div>
              <div className="my-3 border-b-2">
                <p className="p-2 relative text-sm">
                  Who's viewed your profile
                  <p className="absolute right-2 top-2">
                    {profileUser.viewedProfile}
                  </p>
                </p>
                <p className="p-2 relative text-sm">
                  Impresstion of your post
                  <p className="absolute right-2 top-2">
                    {profileUser.impressions}
                  </p>
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
            <div className="w-3/4 mx-auto bg-white p-2 rounded-lg">
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
            {post.data?.map((userPost,index) => (
              <div className="w-3/4 bg-white rounded-lg mx-auto mt-2" key={index} >
                <Post post={userPost} user={profileUser} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
