import React from 'react';
import './Rightnav.css';

function Rightnav() {
  return (
    <div className="fixedTool_wrap">
      <div className="fixedTool">
        <a href="#youhaohuo">
          <div>
            品质<br />好货
          </div>
        </a>
        <a href="#hdzb">
          <div>
            好店<br />直播
          </div>
        </a>
        <a href="#tshw">
          <div>
            实惠<br />热卖
          </div>
        </a>
        <a href="cnxh">
          <div>
            猜你<br />喜欢
          </div>
        </a>
        <a href="#top">
          <div>
            <i className="iconfont">&#xe614;</i>
            <span>顶部</span>
          </div>
        </a>
        <a href="#">
          <div>反馈</div>
        </a>
        <a href="#">
          <div>
            暴恐<br />举报
          </div>
        </a>
      </div>
    </div>
  );
}

export default Rightnav;
