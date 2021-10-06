import React from "react";
import { Button, Layout, Menu, Badge } from "antd";
import "./header.css";
import {
  FolderAddOutlined,
  QuestionCircleOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import GreenBorder from "../greenBorder/GreenBorder";
import { NavLink } from "react-router-dom";
const { Header } = Layout;

const HeaderBar = () => (
    <>
    <GreenBorder />
  <Header style={{ backgroundColor: "white", marginTop: 0}}>
  
    <div className="logo" />
    <Menu style={{ justifyContent: "center" }} theme="light" mode="horizontal" defaultActiveFirst={1}>
      {data.map((data, index) => (
          
        <Menu.Item
          style={{
            color: "black",
            height: 40,
            marginTop: 10,
            textAlign: "center",
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            width: 200,
          }}
          key={index + 1}
        >
         <Badge style={{position: 'absolute', top: -10, right: -10}} count={data.badge}> {data.icon} {data.title}</Badge>
          <NavLink to={data.path} />
        </Menu.Item>
      ))}
      <Button
          style={{
            position: "absolute",
            right:10,
            top: 25
          }}
        >
          My Profile
        </Button>
    </Menu>
    
  </Header>
  <GreenBorder />
  </>
);

export default HeaderBar;

const data = [
  { title: "Projects", icon: <FolderAddOutlined />, badge: 0 ,path: '/projects'},
  { title: "Query", icon: <QuestionCircleOutlined />, badge: 1, path: '#' },
  { title: "Notifications", icon: <NotificationOutlined />, badge: 1, path: '#' },
];
