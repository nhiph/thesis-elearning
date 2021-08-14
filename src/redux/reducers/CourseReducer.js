import {GET_COURSE_LIST,GET_COURSE_DETAIL, GET_CATEGORY_LIST, REGISTER_COURSE, GET_COURSE_CATEGORY_LIST, GET_COURSE_FILTER} from '../actions/types/CoursesType'

const initialState = {
    courseList: [],
    categoryList: [],
    courseDetail: {},
    registeredCourses: [],
    courseCategoryList: [],
    courseFilterList: [],
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

    case REGISTER_COURSE: {
        state.registeredCourses = action.payload
        return {...state}
    }

    case GET_COURSE_CATEGORY_LIST: {
        state.courseCategoryList = action.payload
        return {...state}
    }

    case GET_COURSE_FILTER: {
        console.log(action.payload)
        state.courseFilterList = action.payload
        return {...state}
    }

    default:
      return state;
  }
};
