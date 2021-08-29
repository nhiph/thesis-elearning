import { CONFIRM_COURSE, CONFIRM_USER, COURSE_LIST_REVIEWED, COURSE_LIST_REVIEWING, DELETE_COURSE, DELETE_COURSE_IN_COURSE_LIST, DELETE_USER, DELETE_USER_IN_USER_LIST, GET_LIST_COURSE_AD, GET_LIST_USER_AD, USER_LIST_REVIEWED, USER_LIST_REVIEWING } from "../actions/types/AdminType";

const initialState = {
    userListAd: [],
    courseListAd: [],
    courseListReviewing: [],
    courseListReviewed: [],
    userListReviewing: [],
    userListReviewed: [],
};
  
  export const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_LIST_USER_AD: {
        state.userListAd = action.payload
        return {...state}
      }

      case GET_LIST_COURSE_AD: {
          state.courseListAd = action.payload
          return {...state}
      }

      case COURSE_LIST_REVIEWING:{
          state.courseListReviewing = action.payload
          return {...state}
      }

      case COURSE_LIST_REVIEWED: {
        state.courseListReviewed = action.payload
        return {...state}
      }

      case USER_LIST_REVIEWING: {
        state.userListReviewing = action.payload
        return {...state}
      }

      case USER_LIST_REVIEWED: {
        state.userListReviewed = action.payload
        return {...state}
      }

      case CONFIRM_COURSE: {
        // 1.1 RETURN COURSE LIST
        let courseListReviewedUpdate = [...state.courseListReviewed]
        let courseListReviewingUpdate = [...state.courseListReviewing]
        courseListReviewingUpdate = courseListReviewingUpdate.filter(course => course.maKhoaHoc != action.payload.maKhoaHoc)
        courseListReviewedUpdate.push(action.payload)
        // 1.2 ASIGN COURSE LIST
        state.courseListReviewed = courseListReviewedUpdate
        state.courseListReviewing = courseListReviewingUpdate
        return {...state}
      }

      case DELETE_COURSE: {
        let courseListReviewedUpdate = [...state.courseListReviewed]
        let courseListReviewingUpdate = [...state.courseListReviewing]
        courseListReviewedUpdate = courseListReviewedUpdate.filter(course => course.maKhoaHoc != action.payload.maKhoaHoc)
        courseListReviewingUpdate = courseListReviewingUpdate.filter(course => course.maKhoaHoc != action.payload.maKhoaHoc)
        state.courseListReviewed = courseListReviewedUpdate
        state.courseListReviewing = courseListReviewingUpdate
        return {...state}
      }

      case CONFIRM_USER: {
        let userListReviewingUpdate = [...state.userListReviewing]
        let userListReviewedUpdate = [...state.userListReviewed]
        userListReviewingUpdate = userListReviewingUpdate.filter(user => user.taiKhoan != action.payload.taiKhoan)
        userListReviewedUpdate.push(action.payload)
        state.userListReviewing = userListReviewingUpdate
        state.userListReviewed = userListReviewedUpdate
        return {...state}
      }

      case DELETE_USER: {
        let userListReviewingUpdate = [...state.userListReviewing]
        let userListReviewedUpdate = [...state.userListReviewed]
        userListReviewingUpdate = userListReviewingUpdate.filter(user => user.taiKhoan != action.payload.taiKhoan)
        userListReviewedUpdate = userListReviewedUpdate.filter(user => user.taiKhoan != action.payload.taiKhoan)
        state.userListReviewing = userListReviewingUpdate
        state.userListReviewed = userListReviewedUpdate
        return {...state}
      }

      case DELETE_USER_IN_USER_LIST: {
        let userListAdUpdate = [...state.userListAd]
        userListAdUpdate = userListAdUpdate.filter(user => user.taiKhoan != action.payload)
        state.userListAd = userListAdUpdate
        return {...state}
      }
  
      case DELETE_COURSE_IN_COURSE_LIST: {
        let courseListAdUpdate = [...state.courseListAd]
        courseListAdUpdate = courseListAdUpdate.filter(course => course.maKhoaHoc != action.payload)
        state.courseListAd = courseListAdUpdate
        return {...state}
      }
      default: {
          return {...state}
      }
    }
  };
  