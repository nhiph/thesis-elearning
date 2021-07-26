import axios from "axios";
import {GET_COURSE_LIST, GET_COURSE_DETAIL, GET_CATEGORY_LIST} from '../actions/types/CoursesType'

export const getListCourseAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
                method: 'GET' 
            })
            dispatch({
                type: GET_COURSE_LIST,
                payload: result.data
            })
        }catch(err) {
            console.log('err', err)
        }
    }
}

export const getListCategoryAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc',
                method: 'GET'
            })
            dispatch({
                type: GET_CATEGORY_LIST,
                payload: result.data
            })
        }catch(err) {
            console.log("err",err)
        }
    }
}

export const getDetailCourseAction = (maKhoaHoc) => {
    return async (dispatch) => {
        try{
            let result = await axios({
                url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
                method: 'GET'
            })
            dispatch({
                type: GET_COURSE_DETAIL,
                payload: result.data
            })
        }catch(err) {
            console.log('err', err)
        }
    }
}

export const getCourseCategoryAction = (maDanhMuc, maNhom) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${maNhom}`,
                method: 'GET'
            })
            dispatch({
                type: GET_COURSE_LIST,
                payload: result.data
            })

        }catch(err) {
            console.log(err, "err")
        }
    }
}