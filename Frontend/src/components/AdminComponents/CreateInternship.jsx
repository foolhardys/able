import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_BASE_URL + "/internships";

const CreateInternship = () => {
  const tempuser = localStorage.getItem("user");
  const user = JSON.parse(tempuser);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    opportunity: "",
    role: "",
    minStipend: "",
    maxStipend: "",
    requirements: "",
    mode: "",
    location: "",
    course: "",
    batch: "",
    description: "",
    workHours: "",
    startDate: new Date(),
    applyLink: "",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, startDate: date });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const token = user.token;
      // formData.append("logo", formData.logo);
      await axios.post(baseUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Internship created");
      navigate("/admin");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl md:max-w-2xl w-full mx-auto p-4 bg-white shadow-md rounded-lg my-14"
    >
      {Object?.entries(formData)?.map(([key, value]) =>
        key !== "startDate" && key !== "mode" && key !== "logo" ? (
          <div className="mb-4" key={key}>
            <label
              htmlFor={key}
              className="block text-sm font-medium text-gray-800 capitalize"
            >
              {key}
            </label>
            <input
              type={
                key.includes("Stipend") || key.includes("Hours")
                  ? "number"
                  : "text"
              }
              name={key}
              id={key}
              value={value}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              required
            />
          </div>
        ) : null
      )}

      <div className="mb-4">
        <label
          htmlFor="mode"
          className="block text-sm font-medium text-gray-700"
        >
          Mode
        </label>
        <select
          name="mode"
          id="mode"
          value={formData.mode}
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        >
          <option value="">Select mode</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="startDate"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <DatePicker
          selected={formData.startDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="logo"
          className="block text-sm font-medium text-gray-700"
        >
          Logo
        </label>
        <input
          type="file"
          name="logo"
          id="logo"
          onChange={handleFileChange}
          className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateInternship;
