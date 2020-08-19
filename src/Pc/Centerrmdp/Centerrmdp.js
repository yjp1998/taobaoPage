import React from 'react';
import './Centerrmdp.css';
import Itemsinfo from './Itemsinfo';

const itemsinfo = [
  {
    itemUrl: 'https://gma.alicdn.com/bao/uploaded/i4/18715807/O1CN010nKk741sleZNKxprN_!!0-saturn_solar.jpg_200x200.jpg_.webp',
    title: '阿迪达斯官网 adidas 男装运动型格运动裤子',
    comment: '105',
    collection: '528',
    price: '599',
    volume: '10'
  },
  {
    itemUrl: 'https://gma.alicdn.com/bao/uploaded/i4/18715807/O1CN01lVif5D1sleZJ6PXJz_!!0-saturn_solar.jpg_200x200.jpg_.webp',
    title: '阿迪达斯官网 adidas M EM PANT 男装训练运',
    comment: '189',
    collection: '1366',
    price: '399',
    volume: '137'
  },
  {
    itemUrl: 'https://gma.alicdn.com/bao/uploaded/i3/18715807/O1CN01zQZrle1sleZGTii8Z_!!0-saturn_solar.jpg_200x200.jpg_.webp',
    title: '阿迪达斯官网 adidas neo 夏季男装运动圆领',
    comment: '2416',
    collection: '9808',
    price: '229',
    volume: '8'
  },
  {
    itemUrl: 'https://gma.alicdn.com/bao/uploaded/i1/18715807/O1CN01VB5Qif1sleZAJSeqs_!!0-saturn_solar.jpg_200x200.jpg_.webp',
    title: '阿迪达斯官网 SHORTS WV 3S 夏季男装运动型',
    comment: '3198',
    collection: '16732',
    price: '299',
    volume: '26'
  },
  {
    itemUrl: 'https://gma.alicdn.com/bao/uploaded/i2/18715807/O1CN01RhxFQI1sleZNKEr1K_!!0-saturn_solar.jpg_200x200.jpg_.webp',
    title: '阿迪达斯官网adidas CHILL TEE M男训练运动',
    comment: '1293',
    collection: '12732',
    price: '329',
    volume: '631'
  },
  {
    itemUrl: 'https://gma.alicdn.com/bao/uploaded/i2/18715807/O1CN01CysMRE1sleZNJlidX_!!0-saturn_solar.jpg_200x200.jpg_.webp',
    title: '阿迪达斯官网 adidas neo M CS WV TP 男装',
    comment: '534',
    collection: '2348',
    price: '449',
    volume: '231'
  },
  {
    itemUrl: 'https://gma.alicdn.com/bao/uploaded/i3/18715807/O1CN01EPyHWN1sleZMXtdWc_!!0-saturn_solar.jpg_200x200.jpg_.webp',
    title: '阿迪达斯官网adidas 女装运动型格短袖T恤DW',
    comment: '8',
    collection: '182',
    price: '299',
    volume: '16'
  },
  {
    itemUrl: 'https://gma.alicdn.com/bao/uploaded/i3/46427420/O1CN01pHUkXw24gPPX71d0M_!!0-saturn_solar.jpg_200x200.jpg_.webp',
    title: 'Nike耐克官方 PRO女子训练打底裤 AO9969',
    comment: '2845',
    collection: '85038',
    price: '249',
    volume: '1622'
  },
  {
    itemUrl: 'https://gma.alicdn.com/bao/uploaded/i4/46427420/O1CN014vkF8c24gPQ5BRQLS_!!0-saturn_solar.jpg_200x200.jpg_.webp',
    title: '儿童泳镜男童专业防水防雾高清游泳眼镜女童',
    comment: '3241',
    collection: '17216',
    price: '24.9',
    volume: '8798'
  }
];
const listitems = itemsinfo.map((itemsinfo) => 
  <Itemsinfo
    itemUrl={itemsinfo.itemUrl}
    title={itemsinfo.title}
    comment={itemsinfo.comment}
    collection={itemsinfo.collection}
    price={itemsinfo.price}
    volume={itemsinfo.volume}
  />
)
function Centerrmdp() {
  return (
    <div className="center_rmdp" id="rmdp">
      <div className="center_rmdp_wrap">
        <div className="rmdp_header">
          <span>| 热卖单品</span>
          <div>
            <a href="#">连衣裙</a>
            <a href="#">沙发</a>
            <a href="#">窗帘</a>
            <a href="#">零食</a>
            <a href="#">床垫</a>
            <a href="#">茶几</a>
            <a href="#">耳机</a>
            <a href="#">风扇</a>
            <a href="#">电脑椅</a>
            <a href="#">椅子</a>
            <a href="#">拉杆箱</a>
            <a href="#">男鞋</a>
            <a href="#">电风扇</a>
            <a href="#">鞋柜</a>
            <a href="#">客厅灯</a>
            <a href="#">女包</a>
            <a href="#">电脑桌</a>
            <a href="#">衣柜</a>
            <a href="#">凉席</a>
            <a href="#">浴室柜</a>
            <a href="#">男内裤</a>
            <a href="#">沙发垫</a>
            <a href="#">男T恤</a>
            <a href="#">面膜</a>
            <a href="#">衬衫</a>
          </div>
          <img src="https://img.alicdn.com/tfs/TB13L7fbMoQMeJjy0FnXXb8gFXa-64-30.png" alt="" />
        </div>
        <div className="rmdp_content">
          {listitems}
        </div>
        <div className="rmdp_bottom">
          <div>
            <img src="https://img.alicdn.com/simba/img/TB1ArRCyEH1gK0jSZSySuttlpXa.jpg" alt="" />
          </div>
          <div>
            <img src="https://img.alicdn.com/simba/img/TB1qR6OcOpE_u4jSZKbSuvCUVXa.jpg" alt="" />
          </div>
          <div>
            <img src="https://img.alicdn.com/simba/img/TB1QIB2LbY1gK0jSZTESutDQVXa.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Centerrmdp;
