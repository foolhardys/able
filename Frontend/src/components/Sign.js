import React, { useState } from "react";
import Cell from "../assets/cell.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const login = process.env.REACT_APP_BASE_URL + "/users/login";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(login, {
        email,
        password,
      });
      const user = response?.data?.user;
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login successfull");
      navigate("/");
      window.location.reload();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="font-[sans-serif] text-[#333] bg-[#f6f6f7] m-0 p-0">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="mb-24 bg-white grid md:grid-cols-2 items-center gap-4 max-w-4xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl">
          <div className="md:max-w-md w-full sm:px-6 py-4">
            <form onSubmit={handleLogin}>
              <div>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-center w-full text-xs rounded border border-dark px-2 py-3 outline-1"
                    placeholder="Enter your email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clip-path="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="mt-8">
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-center w-full text-xs rounded border border-dark px-2 py-3 outline-1"
                    placeholder="Password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="mt-12 flex justify-center">
                <button
                  type="submit"
                  className=" w-32 shadow-xl py-2.5 px-4 text-sm font-semibold rounded-2xl text-white bg-black hover:bg-black-700 focus:outline-none"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="md:h-full max-md:mt-10 rounded-xl lg:p-12 p-8">
            <img src={Cell} className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
