import axios from "axios";
import {
  GET_COURSE_LIST,
  GET_COURSE_DETAIL,
  GET_CATEGORY_LIST,
} from "../actions/types/CoursesType";
import { ACCESSTOKEN } from "../../util/setting";

export const getListCourseAction = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
        method: "GET",
      });
      dispatch({
        type: GET_COURSE_LIST,
        payload: result.data,
      });
    } catch (err) {
      console.log("err", err);
    }
  };
};

export const getListCategoryAction = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
        method: "GET",
      });
      dispatch({
        type: GET_CATEGORY_LIST,
        payload: result.data,
      });
    } catch (err) {
      console.log("err", err);
    }
  };
};

export const getDetailCourseAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
        method: "GET",
      });
      dispatch({
        type: GET_COURSE_DETAIL,
        payload: result.data,
      });
    } catch (err) {
      console.log("err", err);
    }
  };
};

export const getCourseCategoryAction = (maDanhMuc, maNhom) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: GET_COURSE_LIST,
        payload: result.data,
      });
    } catch (err) {
      console.log(err, "err");
    }
  };
};

export const registerCourseAction = (infoDangKy) => {
  return async (dispatch) => {
    try {
      let result1 = await axios({
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
        method: "POST",
        data: infoDangKy,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
        },
      });
      
      // dispatch({
      //   type: REGISTER_COURSE,
      //   payload: result2.data,
      // });
    } catch (err) {
      console.log("err", err);
    }
  };
};

export const removeCourseAction = (infoRemove) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh',
        method: 'POST',
        data: infoRemove,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
      }       
      })
      console.log(result)
      // dispatch({
      //   type: '',
      //   payload: ''
      // })
    }catch(err) {
      console.log("err", err)
    }
  }
}
