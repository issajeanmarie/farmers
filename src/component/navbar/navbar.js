import React from "react";
import { Layout } from "antd";
import Profile from "../profile";
import "./index.css";

const { Header } = Layout;

const Navbar = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <Header style={{ background: "white" }}>
      <Profile isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    </Header>
  );
};

export default Navbar;
