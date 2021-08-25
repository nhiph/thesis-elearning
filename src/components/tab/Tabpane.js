import React, {useState} from "react";
import { Menu } from "antd";
import './tab.scss'
import {ArrowDownOutlined} from "@ant-design/icons";
import logo from "../../assets/img/MIN-OP1.png";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Search } = Input;

export default function Tabpane() {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
      width: 250,
    }}
  />
);

const onSearch = value => console.log(value);

  return (
    <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
      <div>
      <SubMenu
            key="SubMenu"
            title="DANH MỤC KHÓA HỌC"
          >
        <Menu.ItemGroup>
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:1">Option 1</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      </div>
      <div>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      </div>
      <div>
        <img src={logo} width="200" alt="..." />
      </div>
      <div>
        <button className="rounded-md border-gray-50 border px-6 mr-2">Đăng nhập</button>
        <button className="rounded-md border-gray-50 border px-6">Đăng ký</button>
      </div>
    </Menu>
  );
}
