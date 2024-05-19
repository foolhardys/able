import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ internship }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Internship Description" {...a11yProps(0)} />
          <Tab label="Qualification" {...a11yProps(1)} />
          <Tab label="About The Company" {...a11yProps(2)} />
        </Tabs>
      </Box>{" "}
      <CustomTabPanel value={value} index={0}>
        <ul className="m-4">
          <li className="pb-5 text-black">
            <a href="/">
              <b>Role:</b> {internship?.role}
            </a>
          </li>
          <li className="pb-5  text-black">
            <a href="/">
              <b>Stipend:</b> Rs {internship?.minStipend} -{" "}
              {internship?.maxStipend} per month
            </a>
          </li>
          <li className="pb-5 text-black">
            <a href="/">
              <b>Location:</b> {internship?.location} ({internship?.mode})
            </a>
          </li>
          <li className="pb-5 text-black">
            <a href="/">
              <b>Opportunity:</b> {internship?.opportunity}
            </a>
          </li>
          <li className="pb-5 text-black">
            <a href="/">
              <b>Workhours per day :</b> {internship?.workHours} hrs
            </a>
          </li>
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ul className="m-4">
          <li className="pb-5 text-black">
            <p>
              <b>Batch and Course:</b> {internship?.course} {internship?.batch}
            </p>
          </li>
          <li className="pb-5 text-black">
            <p>
              <b>Skills required:</b> {internship?.requirements}
            </p>
          </li>
          <li className="pb-5 text-black">
            <p>Communication , prsentation, and organizational skills.</p>
          </li>
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <p className="text-black">{internship?.description}</p>
      </CustomTabPanel>
    </Box>
  );
}
