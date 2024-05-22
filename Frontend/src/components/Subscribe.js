import React from "react";

const Subscribe = () => {
  return (
    <div className="flex justify-center my-10 mb-20 mt-16">
      <form className="sm:w-1/2 w-96">
        <label
          for="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-[#EBEBEB] focus:ring-blue-500 focus:border-blue-500  dark:border-[/EBEBEB] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            className="text-white hover:text-black absolute end-2.5 bottom-2.5 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 dark:bg-black dark:hover:bg-white dark:focus:ring-blue-800"
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
