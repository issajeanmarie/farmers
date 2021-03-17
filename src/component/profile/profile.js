import React from "react";
import Picture from "../../assets/img/girl.jpg";
import Logo from "../../assets/img/IB_logo.png";
import {
  MenuOutlined,
  CloseOutlined,
  BellFilled,
  CaretDownOutlined
} from "@ant-design/icons";
import "./index.css";

const Profile = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <>
      <div className="navProfile">
        <span
          className="toggleBtn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <MenuOutlined /> : <CloseOutlined />}
        </span>

        <div className="awesomityLogo">
          <div className="imgCont">
            <img src={Logo} alt="Awesomity Lab" />
          </div>
          <p className="text_white_green">Awesomity Lab</p>
        </div>

        <div className="profile"></div>
      </div>
    </>
  );
};

export default Profile;
