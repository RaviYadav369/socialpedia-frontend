import React, { useState } from "react";
import { HiMiniUserPlus } from "react-icons/hi2";
import { BiCommentDetail } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { likePost } from "../store/reducers/post/post.action";
import { updateUserFriend } from "../store/reducers/friend/friend.action";

const Post = ({ post, user }) => {
  const [like, setlike] = useState(post.likes[user._id] ? true : false);
  const [friend, setfriend] = useState(
    user.friends.includes(post.userId) ? true : false
  );
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likePost(post._id, user._id));
    setlike(true);
  };
  const handleFriend = () => {
    dispatch(updateUserFriend(user._id, post.userId));
    setfriend((prev) => !prev);
  };
  // console.log(post);
  return (
    <>
      <div className="w-full px-4 mt-3 mx-auto bg-white ">
        <div className="pt-2">
          <Link to={`/profile/${post.userId}`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP4oKUXDbkuEQhaY-AMiOem8EaHZhBQglQQ&usqp=CAU"
              alt="photo"
              className="w-12 h-12 rounded-full inline"
            />
          </Link>
          <div className="inline-block relative w-11/12 ">
            <span className="text-lg p-2 font-semibold ">{`${post.firstName} ${post.lastName}`}</span>
            <span className=" right-0 absolute">
              {friend ? (
                <BsFillSendFill className="text-2xl" />
              ) : (
                <HiMiniUserPlus className="text-2xl" onClick={handleFriend} />
              )}
            </span>
            <p className="text-xs ml-2">{post.location}</p>
          </div>
        </div>
        <div className=" border pt-4">
          <div className="">{post.description}</div>
          <div className="h-[500px]">
            <img
              className="w-full h-full object-fill rounded-xl mt-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP4oKUXDbkuEQhaY-AMiOem8EaHZhBQglQQ&usqp=CAU"
              alt="post"
            />
          </div>
          <div className="p-2 border-t m-1 flex justify-between">
            <div className="gap-7 flex">
              {like ? (
                <AiFillLike className="text-2xl" onClick={handleLike} />
              ) : (
                <AiOutlineLike className="text-2xl" onClick={handleLike} />
              )}

              <BiCommentDetail className="text-2xl" />
            </div>
            <div>
              <BsShare className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
