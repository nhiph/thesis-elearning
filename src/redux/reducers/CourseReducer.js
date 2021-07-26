import {GET_COURSE_LIST,GET_COURSE_DETAIL, GET_CATEGORY_LIST} from '../actions/types/CoursesType'

const initialState = {
    courseList: [],
    categoryList: [],
    courseDetail: {},
};

export const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_LIST:{
        state.courseList = action.payload
        return {...state}
    }
    case GET_CATEGORY_LIST: {
        state.categoryList = action.payload
        return {...state}
    }

    case GET_COURSE_DETAIL: {
        state.courseDetail = action.payload
        return {...state}
    }

    default:
      return state;
  }
};
