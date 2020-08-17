import React from 'react';
import './Header.css';
import './HeaderWebNav.css';

function Header() {
  return (
    <div className="header_nav" id="top">
      <div className="header_nav_container">
        <ul className="header_nav_left">
          <li className="header_nav_left_item location">
            <span>中国大陆</span>
            <span className="iconfont">&#xe612;</span>
            <ul className="hover_location_menu">
              <li>全球</li>
              <li>中国大陆</li>
              <li>中国台湾</li>
              <li>中国澳门</li>
              <li>韩国</li>
              <li>马来西亚</li>
              <li>澳大利亚</li>
              <li>新加坡</li>
              <li>新西兰</li>
              <li>加拿大</li>
              <li>美国</li>
              <li>日本</li>
            </ul>
          </li>
          <li className="header_nav_left_item  log_in">
            <span>亲，请登录</span>
          </li>
          <li className="header_nav_left_item">
            <span>免费注册</span>
          </li>
          <li className="header_nav_left_item">
            <span>手机逛淘宝</span>
          </li>
        </ul>
        <ul className="header_nav_right">
          <li className="header_nav_right_item myTaobao">
            <span>我的淘宝</span>
            <span className="iconfont">&#xe612;</span>
            <ul className="hover_myTaobao_menu">
              <li>已买到的宝贝</li>
              <li>我的足迹</li>
            </ul>
          </li>
          <li className="header_nav_right_item shopCar">
            <span className="iconfont">&#xe6b8;</span>
            <span>购物车</span>
            <span className="iconfont">&#xe612;</span>
          </li>
          <li className="header_nav_right_item collection">
            <span className="iconfont">&#xe629;</span>
            <span>收藏夹</span>
            <span className="iconfont">&#xe612;</span>
            <ul className="hover_collection_menu">
              <li>收藏的宝贝</li>
              <li>收藏的店铺</li>
            </ul>
          </li>
          <li className="header_nav_right_item category">
            <span>商品分类</span>
          </li>
          <li className="header_nav_right_item">
            <span>|</span>
          </li>
          <li className="header_nav_right_item qnSellerCenter">
            <span>千牛卖家中心</span>
            <span className="iconfont">&#xe612;</span>
            <ul className="hover_qnSellerCenter_menu">
              <li>免费开店</li>
              <li>已卖出的宝贝</li>
              <li>出售中的宝贝</li>
              <li>卖家服务市场</li>
              <li>卖家培训中心</li>
              <li>体验中心</li>
              <li>问商友</li>
            </ul>
          </li>
          <li className="header_nav_right_item customerService">
            <span>联系客服</span>
            <span className="iconfont">&#xe612;</span>
            <ul className="hover_customerService_menu">
              <li>消费者客服</li>
              <li>卖家客服</li>
            </ul>
          </li>
          <li className="header_nav_right_item webNavigation">
            <span className="iconfont">&#xe62b;</span>
            <span>网站导航</span>
            <span className="iconfont">&#xe612;</span>
            <div className="hover_webNavigation_menu">
              <div className="hover_webNavigation_menu_themeMarket">
                <span>主题市场</span>
                <ul>
                  <li><a href="/#">女装</a></li>
                  <li><a href="/#">男装</a></li>
                  <li><a href="/#">内衣</a></li>
                  <li><a href="/#">鞋靴</a></li>
                  <li><a href="/#">箱包</a></li> 
                  <li><a href="/#">婴童</a></li>
                  <li><a href="/#">家电</a></li>
                  <li><a href="/#">数码</a></li>
                  <li><a href="/#">手机</a></li>
                  <li><a href="/#">美妆</a></li>
                  <li><a href="/#">珠宝</a></li>
                  <li><a href="/#">眼镜</a></li>
                  <li><a href="/#">手表</a></li>
                  <li><a href="/#">运动</a></li>
                  <li><a href="/#">户外</a></li>
                  <li><a href="/#">乐器</a></li>
                  <li><a href="/#">游戏</a></li>
                  <li><a href="/#">动漫</a></li>
                  <li><a href="/#">影视</a></li>
                  <li><a href="/#">美食</a></li>
                  <li><a href="/#">鲜花</a></li>
                  <li><a href="/#">宠物</a></li>
                  <li><a href="/#">农资</a></li>
                  <li><a href="/#">房产</a></li>
                  <li><a href="/#">装修</a></li>
                  <li><a href="/#">建材</a></li>
                  <li><a href="/#">家居</a></li>
                  <li><a href="/#">百货</a></li>
                  <li><a href="/#">汽车</a></li>
                  <li><a href="/#">二手车</a></li>
                  <li><a href="/#">办公</a></li>
                  <li><a href="/#">定制</a></li>
                  <li><a href="/#">教育</a></li>
                  <li><a href="/#">卡券</a></li>
                  <li><a href="/#">本地</a></li>
                </ul>
              </div>
              <div className="hover_webNavigation_menu_charMarket">
                <span>特色市场</span>
                <ul>
                  <li><a href="/#">全球购</a></li>
                  <li><a href="/#">极有家</a></li>
                  <li><a href="/#">阿里拍卖</a></li>
                  <li><a href="/#">淘宝众筹</a></li>
                  <li><a href="/#">飞猪</a></li>
                  <li><a href="/#">农资</a></li>
                  <li><a href="/#">天天特卖</a></li>
                  <li><a href="/#">Outlets</a></li>
                  <li><a href="/#">淘抢购</a></li>
                  <li><a href="/#">试用</a></li>
                  <li><a href="/#">量贩团</a></li>
                  <li><a href="/#">阿里翻译</a></li>
                </ul>
              </div>
              <div className="hover_webNavigation_menu_aliApp">
                <span>阿里APP</span>
                <ul>
                  <li><a href="/#">淘宝</a></li>
                  <li><a href="/#">天猫</a></li>
                  <li><a href="/#">支付宝</a></li>
                  <li><a href="/#">聚划算</a></li>
                  <li><a href="/#">飞猪</a></li>
                  <li><a href="/#">蚂蚁聚宝</a></li>
                  <li><a href="/#">闲鱼</a></li>
                  <li><a href="/#">淘小铺</a></li>
                  <li><a href="/#">阿里钱盾</a></li>
                  <li><a href="/#">钉钉</a></li>
                  <li><a href="/#">高德地图</a></li>
                  <li><a href="/#">虾米音乐</a></li>
                  <li><a href="/#">淘票票</a></li>
                  <li><a href="/#">菜鸟裹裹</a></li>
                  <li><a href="/#">阿里云</a></li>
                  <li><a href="/#">网商银行</a></li>
                  <li><a href="/#">阿里邮箱</a></li>
                  <li><a href="/#">阿里众包</a></li>
                </ul>
              </div>
              <div className="hover_webNavigation_menu_recommend">
                <span>精彩推荐集</span>
                <ul>
                  <li><a href="/#">余额宝</a></li>
                  <li><a href="/#">大牌捡宝</a></li>
                  <li><a href="/#">淘公仔</a></li>
                  <li><a href="/#">浏览器</a></li>
                  <li><a href="/#">淘宝香港</a></li>
                  <li><a href="/#">淘宝台湾</a></li>
                  <li><a href="/#">淘宝全球</a></li>
                  <li><a href="/#">淘宝东南亚</a></li>
                  <li><a href="/#">闺蜜淘货</a></li>
                  <li><a href="/#">大众评审</a></li>
                  <li><a href="/#">淘工作</a></li>
                  <li><a href="/#">阿里巴巴认证</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
