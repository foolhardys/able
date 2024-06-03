import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const baseUrl = process.env.REACT_APP_BASE_URL + "/internships";

const InternshipList = () => {
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const tempuser = localStorage.getItem("user");
  const user = JSON.parse(tempuser);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(baseUrl);
        const data = res?.data;
        setInternships(data);
        setIsLoading(false);
      } catch (error) {
        toast.error(error?.response?.data?.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateInternship = () => {
    navigate("/create-internship");
  };

  const handleDeleteInternship = async (id) => {
    try {
      const token = user?.token;
      await axios.delete(`${baseUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Internship deleted");
      window.location.reload();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleUpdateInternship = (id) => {
    navigate("/updateInternship");
  };

  return (
    <div className="container mx-auto">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-medium text-xs text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        onClick={handleCreateInternship}
      >
        Create Internship
      </button>
      {isLoading ? (
        <div className="flex items-center justify-center w-full">
          <Loader />
        </div>
      ) : (
        <ul className="mt-4 divide-y divide-gray-200">
          {internships.map((internship, index) => (
            <li key={index} className="py-4 flex justify-between">
              <div className="text-sm font-medium">
                {internship?.role} - {internship?.companyName}
              </div>
              <div className="text-sm font-medium">
                {internship?.course} - {internship?.batch}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="inline-flex items-center px-2 py-1 text-xs font-bold rounded-md text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={() => handleDeleteInternship(internship?._id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-2 py-1 text-xs font-bold rounded-md text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => handleUpdateInternship(internship?._id)}
                >
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InternshipList;
