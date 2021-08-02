import React from "react";
import { Table} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { registerCourseAction } from "../../redux/actions/CourseAction";
import './MyCourse.scss'
import {removeCourseAction} from '../../redux/actions/CourseAction'

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
];
const data = [
  {
    key: "1",
    maKhoaHoc: "John Brown",
    tenKhoaHoc: 32,
  },
]; // rowSelection object indicates the need for row selection

export default function MyCourse() {
  const dispatch = useDispatch()

  const { userLogin } = useSelector((state) => state.UserReducer);

  const registeredCourses = userLogin.chiTietKhoaHocGhiDanh.map((course, idx) => {
    return {...course, key: idx}
  })

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
        dataSource={registeredCourses}
      />
    </div>
  );
}
