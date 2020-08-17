import React from 'react';
import './Contentrightmodule.css';

function Contentrightmodule () {
  return (
    <div class="right_module">
      <ul>
        <li class="module_topUp">
          <span class="iconfont">&#xe638;</span>
          <span>充话费</span>
          <div class="topUp_hover">
            <div class="topUp_hover_header">
              <span class="hover_topUp">充话费</span>
              <span class="hover_liuliang">充流量</span>
              <span class="hover_guhua">充固话</span>
              <span class="hover_kuandai">充宽带</span>
            </div>
            <div class="hover_topUp">
              <div class="hover_topUp_number">
                <input type="text" placeholder="请输入电话号码" />
                <span class="iconfont">&#xe720;</span>
              </div>
              <div class="hover_topUp_amount">
                <input type="text" placeholder="50元" />
                <span class="iconfont">&#xe612;</span>
              </div>
              <div class="hover_topUp_price">
                <span>售价</span>
                <span>￥</span>
                <span>49-49.8</span>
              </div>
              <button class="hover_topUp_price_btn">立即充值</button>
            </div>
          </div>
        </li>
        <li class="module_trip">
          <span class="iconfont">&#xe89f;</span>
          <span>旅行</span>
          <div class="trip_hover">
            <div class="hover_domesticTickets">
              <div class="trip_hover_header">
                <span class="hover_domesticTickets">国内机票</span>
                <span class="hover_internationalTickets">国际机票</span>
                <span class="hover_hotel">酒店客栈</span>
                <span class="hover_vacationTickets">度假门票</span>
                <span class="hover_trainTickets">火车票</span>
              </div>
              <div class="trip_hover_type">
                <div class="type_one-way">
                  <input name="tripType" type="radio" checked />
                  <label>单程</label>
                </div>
                <div class="type_return">
                  <input name="tripType" type="radio" />
                  <label>往返</label>
                </div>
                <span>中国港澳台请选择国际机票</span>
              </div>
              <div class="trip_hover_location">
                <div class="trip_hover_setOut">
                  <span>出发</span>
                  <input type="text" placeholder="城市" />
                  <i class="iconfont">&#xe637;</i>
                </div>
                <span class="iconfont">&#xe67b;</span>
                <div class="trip_hover_arrive">
                  <span>出发</span>
                  <input type="text" placeholder="城市" />
                  <i class="iconfont">&#xe637;</i>
                </div>
                <div class="trip_hover_date">
                  <span>出发</span>
                  <input type="text" placeholder="日期" />
                  <i class="iconfont">&#xe787;</i>
                </div>
                <button class="trip_hover_btn">查找</button>
              </div>
            </div>
          </div>
        </li>
        <li class="module_carInsurance">
          <span class="iconfont">&#xe615;</span>
          <span>车险</span>
        </li>
        <li class="module_game">
          <span class="iconfont">&#xe69e;</span>
          <span>游戏</span>
        </li>
        <li class="module_lottery">
          <span class="iconfont">&#xe613;</span>
          <span>彩票</span>
        </li>
        <li class="module_movie">
          <span class="iconfont">&#xe6be;</span>
          <span>电影</span>
        </li>
        <li class="module_hotel">
          <span class="iconfont">&#xe641;</span>
          <span>酒店</span>
        </li>
        <li class="module_financing">
          <span class="iconfont">&#xe623;</span>
          <span>理财</span>
        </li>
      </ul>
    </div>
  );
}

export default Contentrightmodule;
