import React, {useEffect, useState} from "react";
import './AdminUser.scss'
import { Input } from "antd";
import {getUserList} from '../../redux/actions/AdminAction'
import {useSelector, useDispatch} from 'react-redux'
import { Pagination } from 'antd'
import AdminUserModal from '../../components/modal/AdminUser'

const { Search } = Input;

export default function AdminCourse() {
  const [current, setCurrent] = useState(1)
  const {userListAd} = useSelector(state => state.AdminReducer)
  const {userLogin} = useSelector(state => state.UserReducer)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(userLogin) {
      let action = getUserList(userLogin.maNhom, current)
      dispatch(action)
    }
  }, [userLogin])

  const onSearch = (value) => console.log(value);

  const onChange = page => {
    setCurrent(page);
    let action = getUserList(userLogin.maNhom, page)
    dispatch(action)
  };

  const renderUserList = () => {
    return userListAd?.map((user, idx) => {
      return <tr key={idx}>
      <td className="text-center">{idx + 1}</td>
      <td className="text-left">{ user.taiKhoan }</td>
      <td className="text-left">{ user.hoTen }</td>
      <td className="text-left">{ user.email }</td>
      <td className="text-left">{ user.soDT }</td>
      <td className="text-left">
        <div className="flex justify-center items-center">
          <AdminUserModal taiKhoan={user.taiKhoan}/>
          <button className="mx-4 action-btn"><i class="fa fa-edit"></i></button>
          <button className=" action-btn"><i class="fa fa-trash"></i></button>
        </div>
      </td>
    </tr>
    })
  }
  return (
    <div className="px-10">
      <Search placeholder="Nhập từ khóa" onSearch={onSearch} enterButton className="mr-10 mb-8"/>
      
      {/* course list */}
      <div className="admin-course">
      <table class="table-fill">
        <thead>
          <tr>
            <th class="text-left">STT</th>
            <th class="text-left">TaiKhoan</th>
            <th class="text-left">HoTen</th>
            <th class="text-left">Email</th>
            <th class="text-left">SDT</th>
            <th class="text-left">HanhDong</th>
          </tr>
        </thead>
        <tbody class="table-hover">
          {renderUserList()}
        </tbody>
      </table>
      </div>
      <div className="flex justify-center items-center mt-4">
          <Pagination current={current} onChange={onChange} total={1000} />
          </div>
      </div> 
  );
}
