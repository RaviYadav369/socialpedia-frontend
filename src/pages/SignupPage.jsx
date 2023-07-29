import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [newCredentials, setnewCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const response = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName: newCredentials.firstName,
        lastName: newCredentials.lastName,
        email: newCredentials.email,
        password: newCredentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    localStorage.getItem("token", json.token);
    if (json.saveUser) {
      navigate("/login");
    } else {
      alert("error occcured");
    }
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
          <form onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="p-3 mt-12 w-full text-center bg-cyan-300 text-xl hover:bg-cyan-500 transition delay-150 text-white font-semibold rounded-2xl"
            >
              Sign Up
            </button>
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
