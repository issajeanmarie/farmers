import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Navbar, Sidemenu } from "../component";

const { Content } = Layout;

const Routes = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Layout>
      <Sidemenu isCollapsed={isCollapsed} /> {/* Exported from components */}
      <Layout>
        {/* Exported from components */}
        <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <Content>These are contents</Content>
      </Layout>
    </Layout>
  );
};

export default Routes;
