import React from "react";
import Picture from "../../assets/img/girl.jpg";
import Logo from "../../assets/img/IB_logo.png";
import { Typography } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  BellFilled,
  CaretDownOutlined
} from "@ant-design/icons";
import "./index.css";

const { Title } = Typography;

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

        <div className="profile">
          <span className="notfication" style={{ lineHeight: "25px" }}>
            <BellFilled />
          </span>
          <div className="profilePic">
            <img src={Picture} alt="User profile" />
          </div>
          <Title className="title_3" level={4}>
            Issa Jean Marie <CaretDownOutlined className="text_lable" />
          </Title>
        </div>
      </div>
    </>
  );
};

export default Profile;
