import React from "react";
import { useSelector } from "react-redux";
import SideNav from "../../../../components/Dashboard/SideNav/SideNav";
import './UserProfile.css'
const ViewOrder = () => {
  const loggedInUserInfo = useSelector((state) => state.auths);
  
  return (
    <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <SideNav active="User Profile" navType="user" />
        </div>
        <div className="col-md-9">
          <div className="col-md-12 p-5 d-flex justify-content-center align-items-center">
          <div id="profile-main-card">
        <div className="profile-cover-photo"></div>
        <div className="profile-photo">
            <img src={loggedInUserInfo.userInfo.image} alt=""/>
        </div>
        <div className="profile-content">
            <h4 className="profile-name text-center">{loggedInUserInfo.userInfo.name}</h4>
            <p className=" text-center"><strong>{loggedInUserInfo.userInfo.role}</strong></p>
            <p className="profile-fullstack text-center">MERN Stack Web Developer </p>
        </div>
        <div className="profile-contact">
        <span className='text-white bold'>{loggedInUserInfo.userInfo.email}</span>
        </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
