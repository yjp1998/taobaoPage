import React from 'react';
import './Centernav.css';

function Centernav() {
  return (
    <div class="center_nav">
      <div class="center_nav_wrap">
        <h3>主题市场</h3>
        <ul class="center_nav_hd first">
          <li>天猫</li>
          <li>聚划算</li>
          <li>天猫超市</li>
        </ul>
        <ul class="center_nav_hd">
          <li>|</li>
          <li>淘抢购</li>
          <li>电器城</li>
          <li>司法拍卖</li>
          <li>淘宝心选</li>
          <li>兴农脱贫</li>
        </ul>
        <ul class="center_nav_hd">
          <li>|</li>
          <li>飞猪旅行</li>
          <li>智能生活</li>
          <li>苏宁易购</li>
        </ul>
      </div>
    </div>
  );
}

export default Centernav;
