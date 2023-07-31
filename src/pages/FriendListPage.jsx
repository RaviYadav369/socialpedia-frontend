import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { BsFillSendFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserFriend,
  updateUserFriend,
} from "../store/reducers/friend/friend.action";
import { useParams } from "react-router-dom";

const FriendListPage = () => {
  const user = useSelector((globalstate) => globalstate.user);
  const dispatch = useDispatch();
  
  const handleFriend = (deleteId) => {
    console.log(deleteId);
    dispatch(updateUserFriend(user._id, deleteId));
    dispatch(getUserFriend(user._id))
  };
  
  useEffect(() => {
    dispatch(getUserFriend(user._id));
    // handleFriend();
  }, []);
  const userFriends = useSelector((globalstate) => globalstate.userFriend);

  // console.log(userFriends);

  return (
    <>
      <Navbar />
      <div className="w-1/2 mt-24 mx-auto bg-white">
        {userFriends.data?.map((userfriend, index) => (
          <div className="m-2 p-2 border-black" key={index}>
            <div className="border-2 border-gray-500 rounded-lg p-1 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP4oKUXDbkuEQhaY-AMiOem8EaHZhBQglQQ&usqp=CAU"
                alt="photo"
                className="w-14 h-14 rounded-full inline"
              />
              <div className="inline-block relative w-11/12 ">
                <span className="text-lg p-2 font-semibold ">{`${userfriend.firstName} ${userfriend.lastName}`}</span>
                <span className=" right-10 top-4 absolute">
                  <BsFillSendFill className="text-2xl" />
                </span>
                <span
                  className=" right-0 top-4 absolute"
                  onClick={()=>handleFriend(userfriend._id)}
                >
                  <AiFillDelete className="text-2xl" />
                </span>
                <p className="text-xs ml-2">{userfriend.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FriendListPage;
