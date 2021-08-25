import React, {useEffect} from "react";
import { Menu, Dropdown, Button } from "antd";
import "./Dropdown.scss";
import { getListCategoryAction } from "../../redux/actions/CourseAction";
import { useSelector, useDispatch } from "react-redux";

import {NavLink} from 'react-router-dom'

export default function DropdownMenu() {
  const { categoryList } = useSelector((state) => state.CourseReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let action = getListCategoryAction();
    dispatch(action);
  }, []);

  const menu = (
    <Menu>
      {categoryList.map((category, idx) => {
        return <Menu.Item>
        <NavLink target="_blank" rel="noopener noreferrer" to={`/category/${category.maDanhMuc}`}>
          {category.tenDanhMuc}
        </NavLink>
      </Menu.Item>
      })}
    </Menu>
  );
  
  return (
    <Dropdown overlay={menu} placement="bottomCenter" arrow>
      <Button>DANH MỤC KHÓA HỌC</Button>
    </Dropdown>
  );
}
