import { REGISTER_COURSE, REMOVE_COURSE } from '../actions/types/CoursesType';
import {DANG_NHAP, GET_LIST_USER} from '../actions/types/UserType'

const initialState = {
  userLogin: null,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP:{
        state.userLogin = action.payload
        return {...state}
    }

    case REMOVE_COURSE: {
      let courseListUpdate = [...state.userLogin.chiTietKhoaHocGhiDanh]
      let index = courseListUpdate.findIndex(course => course.maKhoaHoc == action.payload)
      if(index != -1) {
          courseListUpdate.splice(index, 1)
      }
      state.userLogin.chiTietKhoaHocGhiDanh = courseListUpdate
      return {...state}
    }

    case REGISTER_COURSE: {
      state.userLogin.chiTietKhoaHocGhiDanh = action.payload.chiTietKhoaHocGhiDanh
      return {...state}
    }

    default: {
        return {...state}
    }
  }
};
