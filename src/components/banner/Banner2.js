import React from "react";
import './Banner2.scss'

export default function Banner2() {
  return (
    <header className="header-banner">
      <div className="overlay" />
      <video
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source
          src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
          type="video/mp4"
        />
      </video>
      <div className="container h-100">
        <div className="pl-32 pt-20 flex justify-start items-center">
          <div>
            <h3 className="text-yellow-500 text-5xl font-bold title1">Khởi đầu sự nghiệp của bạn</h3>
            <p className="text-3xl text-gray-50 title2">
            Trở thành lập trình viên chuyên nghiệp tại Cybersoft
            </p>
            <div className="welcome-btn-group mt-2">
              <a
                href="#"
                className="btn dento-btn "
                data-animation="fadeInUp"
                data-delay="500ms"
              >
                Tư vấn học
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </header>
  );
}
