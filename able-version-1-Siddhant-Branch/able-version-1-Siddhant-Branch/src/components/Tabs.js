import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import acc from '../assets/acc.png'

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <div className='flex font-[poppins]'>
             <img className="w-20 m-6 mb-3 rounded-t-lg shadow p-3 mb-5 bg-gray rounded" src={acc} alt=""/><b className='mt-12 text-3xl font-medium text-black dark:text-white'>ACCENTURE</b>
      </div>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className=''>
          <Tab label="Internship Description" {...a11yProps(0)} />
          <Tab label="Qualification" {...a11yProps(1)} />
          <Tab label="About The Company" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <ul className= 'text-black m-6 dark:text-white'>
                <li className='pb-5 flex flex justify-start'><a href="/"><b>Experience:</b> Freshers</a></li>
                <li className='pb-5 flex flex justify-start'><a href="/"><b>Stipend:</b> Rs 8,000/Month</a></li>
                <li className='pb-5 flex flex justify-start'><a href="/"><b>Location:</b> Banglore(Hybrid)</a></li>
                <li className='pb-5 flex flex justify-start'><a href="/"><b>Role:</b> Month</a></li>
                <li className='pb-5 flex flex justify-start'><a href="/"><b>Industry Type:</b> Education</a></li>
          </ul>
          <div className="flex justify-center md:pt-28">
                <button type="button" className="w-32 shadow-xl py-2.5 px-4 text-sm font-semibold rounded-xl text-white bg-black focus:outline-none dark:bg-white dark:text-black">
                  Apply Now
                </button>
              </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <ul className= 'text-black m-4 dark:text-white'>
                <li className='pb-5 flex justify-start text-xl'><p>Stakeholder Management / Client Relationship / Vendor Management Experience - 0 to 1</p></li>
                <li className='pb-5 flex justify-start text-xl'><p>Fresh MBA Grads Welcomed / Bachelors in Business Administration, Business Management Or related Fields with 6 months of proven Skills or Portfolio.</p></li>
                <li className='pb-5 flex justify-start text-xl'><p>Excellent communication , prsentation, and organizational skills.</p></li>
                <li className='pb-5 flex justify-start text-xl'><p>Proficiency in Microsoft Office Suite (Word , PowerPoint, Outlook, & Excel )and Google Docs.</p></li>
                <li className='pb-5 flex justify-start text-xl'><p>Professionalism , Corporate_Email, Strategic Thinking with negotiating Skills</p></li>
          </ul>
          <div className="flex justify-center md:pt-20">
                <button type="button" className="w-32 shadow-xl py-2.5 px-4 text-sm font-semibold rounded-xl text-white bg-black focus:outline-none dark:bg-white dark:text-black">
                  Apply Now
                </button>
              </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <p className='text-black text-xl dark:text-white'>Accenture is a global professional services company with leading capabilities in digital, cloud and security.Combining unmatched experience and specialized skills across more than 40 industries, we offer Strategy and Consulting, Technology and Operations services, and Accenture Song— all powered by the world’s largest network of Advanced Technology and Intelligent Operations centers. Our 699,000 people deliver on the promise of technology and human ingenuity every day, serving clients in more than 120 countries. We embrace the power of change to create value and shared success for our clients, people, shareholders, partners and communities.Visit us at www.accenture.com</p>
        <div className="flex justify-center md:pt-52">
                <button type="button" className="w-32 shadow-xl py-2.5 px-4 text-sm font-semibold rounded-xl text-white bg-black focus:outline-none dark:bg-white dark:text-black">
                  Apply Now
                </button>
              </div>
      </CustomTabPanel>
      
    </Box>
  );
}
