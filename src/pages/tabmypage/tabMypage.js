import { Tabs } from "antd";
import React from "react";
import MyInfo from '../../components/myinfo/MyInfo'
import _ from 'lodash';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import MyCourse from "../../components/myinfo/MyCourse";

const { TabPane } = Tabs;

export default function TabMypage(props) {

  const { userLogin } = useSelector((state) => state.UserReducer);

  if(!userLogin) {
    alert('Vui lòng đăng nhập !')
    return <Redirect to="/"/>
  }

  const callback = (key) => {
    console.log(key);
  };

  return (
    <div className="px-14 pt-6 pb-12">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Thông tin cá nhân" key="1">
          {_.isEmpty(userLogin) ? "Ban can phai dang nhap" : <MyInfo />}
        </TabPane>
        <TabPane tab="Khóa học của tôi" key="2">
          <MyCourse />
        </TabPane>
      </Tabs>
    </div>
  );
}
