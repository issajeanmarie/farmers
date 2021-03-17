import React from "react";
import { Layout, Menu, Typography } from "antd";
import {
  UserOutlined,
  BuildFilled,
  EnvironmentOutlined,
  LayoutOutlined
} from "@ant-design/icons";
import "./index.css";

const { Sider } = Layout;
const { Title } = Typography;

const Sidemenu = ({ isCollapsed }) => {
  return (
    <Sider collapsible collapsed={isCollapsed} width="180" className="sidebar">
      {!isCollapsed ? (
        <Title className="h1" level={3}>
          Dashboard
        </Title>
      ) : null}

      <Menu theme="dark" mode="vertical">
        <Menu.Item key="sub1" icon={<LayoutOutlined />}>
          OVERVIEW
        </Menu.Item>

        <Menu.Item key="sub2" icon={<BuildFilled />}>
          FARMERS
        </Menu.Item>

        <Menu.Item key="sub3" icon={<UserOutlined />}>
          ACCOUNT
        </Menu.Item>

        <Menu.Item key="sub3" icon={<EnvironmentOutlined />}>
          ZONE
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidemenu;
