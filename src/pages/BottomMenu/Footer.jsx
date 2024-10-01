import React, { useState } from "react";
import HomeIcon from "../../Assets/ic_outline-home.png";
import ActiveHomeIcon from "../../Assets/ic_outline-home.svg";
import { NavLink, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, Typography } from '@mui/material';




const Home = ({ active }) => (
  <img
    src={active ? ActiveHomeIcon : HomeIcon}
    alt="Interview Icon"
    style={{ width: "20px", height: "20px" }}
  />
);

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName === activeIcon ? null : iconName);
  };

  const location = useLocation();
  const hideFooter = [
    "/walkover",
    "/listOrganization",
    "/createOrganization",
    "/checkout",
  ];

  if (hideFooter.includes(location.pathname)) return null;

  return (
    <Box
      sx={{ backgroundColor: "background.default", height: "59px" }}
      className="fixed bottom-0 text-gray-500 w-full text-[10px] px-2 flex flex-row gap-4 items-center justify-between md:hidden"
    >
     <NavLink to="/">
        {({ isActive }) => (
          <div
            className="flex flex-col items-center justify-center  w-[50px]"
            onClick={() => handleIconClick("home")}
          >
            <div
              className={`${
                isActive &&
                "text-white rounded-3xl bg-blue-500/[.15] w-[90%] flex justify-center "
              } px-2 py-1 `}
            >
              <Home active={isActive} />
            </div>
            <p className={`${isActive && "text-blue-500 "}`}>Home</p>
          </div>
        )}
      </NavLink>

      <HomeOutlinedIcon/>
    </Box>
  );
};

export default Footer;