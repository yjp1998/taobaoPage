import React from 'react';
import './Help.css';

function Help() {
  return (
    <div class="helper">
      <div class="helper_wrap">
        <div class="helper_item">
          <div>
            <i class="iconfont">&#xe6a1;</i>
            <span>消费者保障</span>
          </div>
          <ul>
            <li>保障范围</li>
            <li>退货退款流程</li>
            <li>服务中心</li>
            <li>更多特色服务</li>
          </ul>
        </div>
        <div class="helper_item">
          <div>
            <i class="iconfont">&#xe610;</i>
            <span>新手上路</span>
          </div>
          <ul>
            <li>新手专区</li>
            <li>消费警示</li>
            <li>交易安全</li>
            <li>24小时在线帮助</li>
            <li>免费开店</li>
          </ul>
        </div>
        <div class="helper_item">
          <div>
            <i class="iconfont">&#xe633;</i>
            <span>付款方式</span>
          </div>
          <ul>
            <li>快捷支付</li>
            <li>信用卡</li>
            <li>余额宝</li>
            <li>蚂蚁花呗</li>
            <li>货到付款</li>
          </ul>
        </div>
        <div class="helper_item">
          <div>
            <i class="iconfont">&#xe601;</i>
            <span>淘宝特色</span>
          </div>
          <ul>
            <li>手机淘宝</li>
            <li>旺旺/旺信</li>
            <li>大众评审</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Help;
