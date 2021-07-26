import { Tabs } from "antd";
import React from "react";
import MyInfo from '../../components/myinfo/MyInfo'
import _ from 'lodash';
import { useSelector, useDispatch } from "react-redux";
import { USER_LOGIN } from "../../util/setting";
import { Redirect } from "react-router-dom";

const { TabPane } = Tabs;

export default function TabMypage(props) {

  const { userInfo } = useSelector((state) => state.UserReducer);

  if(!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/" />
  }

  const callback = (key) => {
    console.log(key);
  };
  return (
    <div className="px-14 pt-6 pb-12">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Thông tin cá nhân" key="1">
          {_.isEmpty(userInfo) ? <MyInfo /> : "Ban can phai dang nhap"}
        </TabPane>
        <TabPane tab="Khóa học của tôi" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  );
}
