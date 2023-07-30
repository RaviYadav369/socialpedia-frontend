import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../store/reducers/auth/auth.action";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [newCredentials, setnewCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    await dispatch(signUp(newCredentials))
    navigate('/login')
    setnewCredentials({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    })
  };
  const onChange = (e) => {
    setnewCredentials({ ...newCredentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2 className="p-5 text-3xl font-semibold bg-white text-cyan-400 text-center">
        <Link to="/feed">Socialpedia</Link>
      </h2>
      <div className="mx-auto mt-5 p-4 w-2/3 rounded-md bg-slate-100">
        <p className="text-slate-500 font-medium text-4xl">
          Welcome To Socialpedia, the social media for social Gatther
        </p>
        <div className="bg-slate-100 p-3 m-4 mt-8">
          <form >
            <div className="w-full">
              <label
                className="mr-4  font-semibold text-lg"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={newCredentials.firstName}
                onChange={onChange}
                required
                name="firstName"
                className="p-3 mt-4 rounded-xl text-lg w-4/5 font-medium border "
                placeholder="First Name"
              />
            </div>
            <div className="w-full">
              <label className="mr-4  font-semibold text-lg" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                required
                name="lastName"
                value={newCredentials.lastName}
                onChange={onChange}
                className="p-3 mt-4 rounded-xl text-lg w-4/5 font-medium border "
                placeholder="Last Name"
              />
            </div>
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
              className="p-3 mt-12 w-full cursor-pointer text-center bg-cyan-300 text-xl hover:bg-cyan-500 transition delay-150 text-white font-semibold rounded-2xl"
            >
              Sign Up
            </div>
          </form>
          <p className=" p-2 ">
            Already have account?{" "}
            <span className="hover:text-red-400 font-semibold">
              <Link to="/login">Sign In here</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
