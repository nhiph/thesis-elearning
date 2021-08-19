import React from "react";

export default function Banner() {
  return (
    <div className="home-banner flex justify-center gap-4 bg-gray-100 pt-20 pb-40 px-20">
      <div className="col-span-2 pr-5">
        <h1 className="text-yellow-500 text-5xl font-bold">
          Khởi đầu sự nghiệp của bạn
        </h1>
        <h1 className="text-3xl text-gray-50">
          Trở thành lập trình viên chuyên nghiệp tại Cybersoft
        </h1>
        <div className="flex text-gray-50 my-4">
          <button className="bg-yellow-500 font-bold mr-3">Xem khóa học</button>
          <button className="bg-gray-700 font-bold">Tư vấn học</button>
        </div>
      </div>
      {/* <div className="col-span-1"></div> */}
    </div>
  );
}
