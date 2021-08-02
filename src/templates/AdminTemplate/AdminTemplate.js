import React, { useState } from "react";
import {HomeOutlined, UserAddOutlined, FileOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import { Layout, Menu, Tabs } from "antd";
import { Route } from "react-router-dom";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

export default function AdminTemplate(props) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <a href="/">Trang chủ</a>
                </Menu.Item>
                <Menu.Item key="2" icon={<UserAddOutlined />}>
                  <span>Admin</span>
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                  <Menu.Item key="3">Tom</Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                  Files
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                <h1 className="text-gray-200 text-2xl text-center pt-4">
                  QUẢN TRỊ ỨNG DỤNG
                </h1>
              </Header>

              <Content style={{ margin: "0 16px" }}>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Quản lý khóa học" key="1">
                    Content of Tab Pane 1
                  </TabPane>
                  <TabPane tab="Quản lý người dùng" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                </Tabs>
              </Content>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}
