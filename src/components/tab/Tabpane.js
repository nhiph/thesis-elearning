import React, {useState} from "react";
import { Menu } from "antd";
import './tab.scss'
import {ArrowDownOutlined} from "@ant-design/icons";
import logo from "../../assets/img/MIN-OP1.png";

const { SubMenu } = Menu;

export default function Tabpane() {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
      <Menu.Item>
        <img src={logo} width="200" alt="..." />
      </Menu.Item>
      <SubMenu
        key="SubMenu"
        title="DANH MỤC KHÓA HỌC"
      >
        <Menu.ItemGroup>
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item>
        <button className="rounded-md border-gray-50 border px-8 mr-2">Đăng nhập</button>
        <button className="rounded-md border-gray-50 border px-8">Đăng ký</button>
      </Menu.Item>
    </Menu>
  );
}
