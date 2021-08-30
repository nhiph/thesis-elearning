import React, {useEffect, useState} from "react";
import "./Carousel.scss";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { getListAllUser } from "../../redux/actions/UserAction";
import lqs from "../../assets/img/lqs.jpg";

export default function Carousel() {
  const { listAllUser } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  console.log("listAllUser", listAllUser)

  useEffect(() => {
    let action = getListAllUser()
    dispatch(action)
  }, [])

  // getListAllUser

  const renderAllTeacher = () => {
    return listAllUser?.splice(0,9).map((teacher, idx) => {
      return <div
      className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"
      style={{ width: 270 }}
    >
      <svg
        className="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z" />
      </svg>
      
      <span className="text-teal-400 font-bold text-xl mb-3">
        S{teacher.hoTen}
      </span>
      <img
        className="h-16 w-16 rounded-full shadow-2xl"
        src={lqs}
        alt="Img"
      />
      <p className="mt-3 text-gray-600 text-center">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        quibusdam!"
      </p>
      <button className="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">
        Button
      </button>
    </div>
    })
  }

  return (
    <div className=" mx-auto w-full overflow-hidden relative">
      <div className="w-full h-full absolute">
        <div
          className="w-1/4 h-full absolute z-50 left-0"
          style={{
            background:
              "linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
        <div
          className="w-1/4 h-full absolute z-50 right-0"
          style={{
            background:
              "linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
      </div>
      <h3 className="text-4xl pt-12 pb-2 text-center font-bold text-gray-700">ĐỘI NGŨ GIẢNG VIÊN CHẤT LƯỢNG</h3>
      
      <div
        className="carousel-items flex items-center justify-center"
        style={{
          width: "fit-content",
          animation: "carouselAnim 10s infinite alternate linear",
        }}
      >
        
{renderAllTeacher()}
      </div>
    </div>
  );
}
