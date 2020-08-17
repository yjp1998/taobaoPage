import React from 'react';
import './Contentcenter.css';

function Contentcenter() {
  return (
    <div>
      <div className="center_content_swiper">
        <div className="swiper-container">
            <div className="swiper-wrapper">
            </div>
          </div>
      </div>
      <div className="center_content_tmall">
        <div className="tmall_header">
          <span className="iconfont">&#xe7c5;</span>
          <span>理想生活上天猫</span>
        </div>
        <div className="tmall_header_banner">
          <div className="tmal-swiper-wrapper">
          </div>
        </div>
      </div>
      <div className="center_content_ad">
        <div className="ad_topPart">
            <img
              src="https://img.alicdn.com/imgextra/i3/2838892713/O1CN01Cfgot31Vub8nHmyom_!!2838892713.jpg_290x290q90.jpg_.webp"
              alt="" />
          </div>
        <span>今日热卖</span>
        <div className="ad_hotToday">
          <img src="https://aecpm.alicdn.com/simba/img/TB1j4LLKpXXXXcbaXXXSutbFXXX.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contentcenter;
