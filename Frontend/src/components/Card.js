import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CustomTabPanel from "./Tabs";
import { Link } from "react-router-dom/dist";

export default function MediaCard({ internship }) {
  const tempuser = localStorage.getItem("user");
  const user = JSON.parse(tempuser);
  console.log(user);
  return (
    <div>
      <div className="bg-white md:w-[600px] w-[400px] md:mx-0 mx-6 p-6 min-h-[600px] rounded flex flex-col items-center justify-center">
        {/* <CardMedia /> */}
        <div className="flex">
          <img
            className="w-20 m-6 mb-3 rounded-t-lg shadow p-3 bg-gray rounded"
            src={internship?.logo}
            alt={internship?.companyName}
          />
          <b className="mt-12 text-xl text-black">{internship?.companyName}</b>
        </div>
        <CardContent className="lg:w-[550px] min-h-[400px] md:w-4xl w-full">
          <Typography>
            <CustomTabPanel internship={internship} />
          </Typography>
        </CardContent>
        <CardActions className="flex mx-auto justify-center ml-64 mb-6 items-center">
          {user ? (
            <a
              href={internship?.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-black hover:bg-black-700 focus:outline-none text-center"
            >
              Apply Now
            </a>
          ) : (
            <Link
              to="/login"
              className="w-32 shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-black hover:bg-black-700 focus:outline-none text-center"
            >
              {" "}
              Login to apply
            </Link>
          )}
        </CardActions>
      </div>
    </div>
  );
}
