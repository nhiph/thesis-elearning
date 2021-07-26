import React from "react";
import "./Footer.scss";
import logo from "../../assets/img/logo-cyber-nav.svg";
import recaptch from "../../assets/img/reCAPTCHA-logo@2x.png";
import footer1 from "../../assets/img/footer1.png";
import footer2 from "../../assets/img/footer2.jpg";
import footer3 from "../../assets/img/footer3.jpg";

export default function Footer() {
  return (
    <div class="grid grid-cols-3 gap-4 bg-gray-800 text-white py-5">
      {/* column 1 */}
      <div className="footer-col1 pl-5">
        <div className="para-first-col1 mb-6">
          <img src={logo} />
          <p>
            Cybersoft Academy - Hệ thống đào tạo lập trình chuyên sau theo dự án
            thực tế
          </p>
        </div>
        <div className="para-second-col1 mb-6">
          <h3 className="font-bold text-white">NHẬN TIN SỰ KIỆN & KHUYẾN MÃI</h3>
          <p>
            Cybersoft sẽ gửi các khóa học trực tuyến & các chương trình
            CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn
            đến các bạn
          </p>
          <div className="mt-2">
            <input
              className="bg-gray-200 mr-3 mb-2"
              placeholder="your.address@email.com"
            />
            <button className="bg-yellow-500">ĐĂNG KÝ</button>
          </div>
        </div>
        <div className="para-third-col1 mb-6">
          <p>
            <i class="fa fa-map-marker pr-1"></i> Cơ sở 1: 376 Võ Văn Tần - Quận
            3
          </p>
          <p>
            <i class="fa fa-map-marker pr-1"></i> Cơ sở 2: 459 Sư Vạn Hạnh -
            Quận 10
          </p>
          <p>
            <i class="fa fa-map-marker pr-1"></i> Cơ sở 3: 82 Ung Văn Khiêm -
            Bình Thạnh
          </p>
          <p>
            <i class="fa fa-map-marker pr-1"></i> Cơ sở 4: Đà Nẵng - Quận Hải
            Châu
          </p>
          <p>
            <i class="fa fa-phone pr-1"></i> 096.105.1014-098.407.5835
          </p>
        </div>
      </div>

      {/* column 2 */}
      <div className="footer-col2 pr-4">
        <form>
          <h3 className="mb-3 font-bold text-white">ĐĂNG KÝ TƯ VẤN</h3>
          <input
            type="text"
            className="mb-2 w-full p-2"
            placeholder="Họ và tên"
          ></input>
          <input
            type="text"
            className="mb-2 w-full p-2"
            placeholder="Email liên hệ"
          ></input>
          <input
            type="text"
            className="mb-2 w-full p-2"
            placeholder="Điện thoại liên hệ"
          ></input>
          <h3 className="font-bold my-2 text-white">Nhấn vào ô bên dưới</h3>
          <div className="flex items-center justify-between bg-white text-gray-700 mb-3">
            <div className="flex-1 pl-3">
              <input type="radio" className="mr-1" />
              <span>I'm not a robot</span>
            </div>
            <div className="flex-1 ml-10 my-2">
              <img src={recaptch} width="50" />
              <p>Privacy-terms</p>
            </div>
          </div>
          <button className="bg-yellow-500">ĐĂNG KÝ</button>
        </form>
        <div className="mt-4">
          <span>Lập trình Frontend </span>
          <span>Lập trình ReactJs </span>
          <span>Lập trình React Angular </span>
          <span>Lập trình Tư duy </span>
          <span>Lập trình Nodejs </span>
          <span>Lập trình Backend </span>
          <span>Tôi đi code dạo </span>
          <span>Học SEO Hà Nội ở Vietmoz</span>
          <span>Học lập trình trực tuyến</span>
        </div>
      </div>

      {/* column 3 */}
      <div className="footer-col3 pr-5">
        <div className="footer-facebook p-3 font-bold">
          {/* footer-above */}
          <a href="">
            <div className="flex items-center mb-5">
              <img src={logo} width="130" className="mr-2" />
              <a>Cybersoft Academy</a>
            </div>
            <div className="flex items-center justify-between mb-5">
              <a type="button" href="" className="text-black bg-white py-1 px-3 btn-facebook">
                <i class="fab fa-facebook mr-1"></i>Liked
              </a>
              <a type="button" href="" className="text-black bg-white py-1 px-3 btn-facebook">
                <i class="fab fa-facebook-messenger mr-1"></i>Send message
              </a>
            </div>
          </a>
          {/* footer-below */}
          <div className="footer-below mt-4">
            <img src={footer1} />
            <img src={footer2} />
            <img src={footer3} />
            <img src={footer1} />
          </div>
        </div>
        {/* footer-text */}
        <div className="mt-3">
          <span>Anh ngữ giao tiếp</span>
          <span> - Khởi động anh ngữ giao tiếp</span>
          <span> - Lấy đà anh ngữ giao tiếp</span>
          <span> - Bật nhảy anh ngữ giao tiếp</span>
          <span> - Bay trên không anh ngữ giao tiếp</span>
          <span> - Tiếp đất</span>
        </div>
      </div>
    </div>
  );
}
