import React, {useEffect} from "react";
import { Table, Space} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { registerCourseAction } from "../../redux/actions/CourseAction";
import './MyCourse.scss'
import {removeCourseAction} from '../../redux/actions/CourseAction'
import { ACCESSTOKEN } from "../../util/setting";
import { getUserInfo } from "../../redux/actions/UserAction";

export default function MyCourse() {
  const dispatch = useDispatch()

  const { userLogin } = useSelector((state) => state.UserReducer);
  const {chiTietKhoaHocGhiDanh} = useSelector(state => state.UserReducer.userLogin)
  
  const chiTietKhoaHocGhiDanhList = chiTietKhoaHocGhiDanh?.map((course, idx) => {
    return {...course, key: idx}
  })

  useEffect(() => {
    let accessToken = localStorage.getItem(ACCESSTOKEN)
    let action = getUserInfo(accessToken)
    dispatch(action)
  }, [])

  const columns = [
    {
      title: "Mã khóa học",
      dataIndex: "maKhoaHoc",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
    },
    {
      title: 'Hành động',
      render: (course) => (
        <Space size="middle">
          <button
            onClick={() => deleteCourse(course, userLogin.taiKhoan)}
            className="bg-gray-700 text-gray-50 px-4 py-2 rounded-sm font-bold">Delete</button>
        </Space>
      ),
    },
  ];

  const deleteCourse = (course, taiKhoan) => {
    let infoRemove = {
      maKhoaHoc: course.maKhoaHoc,
      taiKhoan: taiKhoan
    }
    let action = removeCourseAction(infoRemove)
    dispatch(action)
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      let infoRemove = {
        taiKhoan: userLogin.taiKhoan,
        maKhoaHoc: selectedRows[selectedRowKeys].maKhoaHoc
      }
      console.log(infoRemove)
      // let action = removeCourseAction()
    },
    getCheckboxProps: (record) => ({
    //   disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  return (
    <div className="flex justify-center w-100">
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={chiTietKhoaHocGhiDanhList}
      />
    </div>
  );
}
