import React from "react";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import ProFastLogo from "../pages/shared/proFastLogo/ProFastLogo";

const AuthenticationLayout = () => {
  return (
    <div>
      <div className="bg-base-200 p-10">
        <div>
          <ProFastLogo></ProFastLogo>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1 items-center justify-start">
            <img src={authImage} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="flex-1">
        <Outlet></Outlet>
      </div>
        </div>
        
      </div>

      
    </div>
  );
};

export default AuthenticationLayout;
