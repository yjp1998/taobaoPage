import React from 'react';
import './Headersearch.css';

function Headersearch() {
  return (
    <div className="header_search">
      <div className="header_search_container_wrap">
        <div className="header_search_container">
          <div className="header_search_logo"></div>
          <div className="header_search_content">
            <div className="search_content_hd">
              <div className="content_hd_tabs">
                <ul>
                  <li>宝贝</li>
                  <li>天猫</li>
                  <li>店铺</li>
                </ul>
              </div>
              <div className="content_hd_panel">
                <div className="search_ft_panel">
                  <div className="search_ft_panel_input">
                    <i className="iconfont">&#xe6a6;</i>
                    <input type="text" placeholder="请输入关键字"/>
                    <i className="iconfont camera">&#xe687;</i>
                  </div>
                </div>
                <div className="search_ft_btn">
                  <button>搜索</button>
                </div>
              </div>
            </div>
            <div className="search_content_ft">
              <a href="/#">新款连衣裙</a>
              <a href="/#">四件套</a>
              <a href="/#">潮流T恤</a>
              <a href="/#">时尚女鞋</a>
              <a href="/#">短裤</a>
              <a href="/#">半身裙</a>
              <a href="/#">男士外套</a>
              <a href="/#">墙纸</a>
              <a href="/#">行车记录仪</a>
              <a href="/#">新款男鞋</a>
              <a href="/#">耳机</a>
              <a href="/#">时尚女包</a>
              <a href="/#">沙发</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headersearch;
