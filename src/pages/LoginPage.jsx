import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../store/reducers/auth/auth.action";
import { getPost } from "../store/reducers/post/post.action";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newCredentials, setnewCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    console.log(newCredentials);
    await dispatch(signIn(newCredentials));
    dispatch(getPost())
    navigate("/feed");
    setnewCredentials({ email: "", password: "" });
  };
  const onChange = (e) => {
    setnewCredentials({ ...newCredentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2 className="p-5 text-3xl font-semibold bg-white text-cyan-400 text-center">
        Socialpedia
      </h2>
      <div className="mx-auto mt-5 p-4 w-2/3 rounded-md bg-white">
        <p className="text-slate-500 font-medium text-4xl">
          Welcome To Socialpedia, the social media for social Gatther
        </p>
        <div className="bg-white p-3 m-4 mt-8">
          <form >
            <div className="w-full">
              <label className="mr-14 font-semibold text-lg" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newCredentials.email}
                onChange={onChange}
                required
                className="p-3 mt-4 rounded-xl text-lg w-4/5 font-medium border "
                placeholder="Enter Your Email"
              />
            </div>
            <div className="w-full">
              <label className="mr-6 font-semibold text-lg" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={newCredentials.password}
                onChange={onChange}
                required
                name="password"
                className="p-3 mt-4 rounded-xl text-lg w-4/5 font-medium border"
                placeholder="Enter Your Password"
              />
            </div>
            <div
              onClick={handleSubmit}
              className="p-3 mt-12 cursor-pointer w-full text-center bg-cyan-300 text-xl hover:bg-cyan-500 transition delay-150 text-white font-semibold rounded-2xl"
            >
              Sign In
            </div>
          </form>
          <p className=" p-2 ">
            Don't have account?{" "}
            <span className="hover:text-red-400 font-semibold">
              <Link to="/signup">Sign up here</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
