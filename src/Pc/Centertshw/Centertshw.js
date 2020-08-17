import React from 'react';
import './Centertshw.css';

function Centertshw() {
  return (
    <div className="center_tshw" id="tshw">
      <div className="center_tshw_wrap">
        <div className="tshw_leftPart">
          <div className="tshw_leftPart_header">
            | 特色好物
          </div>
          <div className="tshw_leftPart_content">
            <div className="content_item">
              <div className="item_info">
                <span>拍卖</span>
                <span>一元起拍捡漏</span>
              </div>
              <div className="item_img">
                <img
                  src="https://img.alicdn.com/bao/uploaded/i1/O1CN01UIZL5G25dwtksOmab_!!0-paimai.jpg_120x120q90.jpg_.webp"
                  alt="" />
              </div>
            </div>
            <div className="content_item">
              <div className="item_info">
                <span>淘小铺</span>
                <span>每月多赚1000元</span>
              </div>
              <div className="item_img">
                <img src="https://img.alicdn.com/tfs/TB1NvbKL7L0gK0jSZFAXXcA9pXa-200-200.jpg_120x120q90.jpg_.webp"
                  alt="" />
              </div>
            </div>
            <div className="content_item">
              <div className="item_info">
                <span>造点新货</span>
                <span>球创意众筹平台</span>
              </div>
              <div className="item_img">
                <img src="https://img.alicdn.com/tfs/TB1F_2nLEH1gK0jSZSyXXXtlpXa-150-150.png_120x120q90.jpg_.webp"
                  alt="" />
              </div>
            </div>
            <div className="content_item">
              <div className="item_info">
                <span>淘宝心选</span>
                <span>美好而有用</span>
              </div>
              <div className="item_img">
                <img src="https://img.alicdn.com/tfs/TB13ZfrLAY2gK0jSZFgXXc5OFXa-150-150.png_120x120q90.jpg_.webp"
                  alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="tshw_rightPart">
          <img src="https://img.alicdn.com/simba/img/TB1O4QQMKL2gK0jSZFmSuw7iXXa.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Centertshw;
