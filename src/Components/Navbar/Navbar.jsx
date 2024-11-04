import React, { useContext } from "react";
import "./Navbar.css";
import menuIcon from "../../assets/menu.png";
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search.png";
import upload from "../../assets/upload.png";
import moreIcon from "../../assets/more.png";
import notificationIcon from "../../assets/notification.png";
import profile from "../../assets/profile.png";
import { sidebarShowContext } from "../../Context/SidebarContext";

const Navbar = () => {

  const [sidebar,setSidebar]= useContext(sidebarShowContext)

  return (
    <nav className="nav-container flex-div">
      
        <div className="left-side flex-div">
          <img src={menuIcon} onClick={()=>setSidebar(prev => prev === false ? true : false)} className="menu-icon" alt="Menu_Icon" />
          <img src={Logo} className="logo-img" alt="Logo" />
        </div>
        <div className="middle flex-div">
          <div className="searchbox flex-div">
            <input type="text" placeholder="Search" />
            <img src={SearchIcon} alt="SearchIcon" />
          </div>
        </div>
        <div className="right-side flex-div">
          <img src={upload} alt="upload" />
          <img src={moreIcon} alt="more" />
          <img src={notificationIcon} alt="notification" />
          <img src={profile} className="userIcon" alt="profile" />
        </div>
      
    </nav>
  );
};

export default Navbar;
