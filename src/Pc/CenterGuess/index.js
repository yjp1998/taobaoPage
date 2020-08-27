import React from 'react';
import './index.css';

class CenterGuess extends React.Component {
  constructor() {
    super();
    this.state = {
      itemsInfo: []
    }
  }
  componentDidMount() {
    this.setState({
      itemsInfo: [
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
      ]
    })
  }
  render() {
    return (
      <div className="center_cnxh" id="cnxh">
        <div className="center_cnxh_wrap">
          <div className="cnxh_header">
            <span>| 猜你喜欢</span>
          </div>
          <div className="cnxh_content">
            {
              this.state.itemsInfo.map((item) => (
                <div className="rmdp_content_item">
                <div className="rmdp_content_item_img">
                  <img
                    src={item.itemUrl} />
                </div>
                <span className="rmdp_content_item_line1">
                  {item.title}
                </span>
                <div className="rmdp_content_item_line2">
                  <span>{item.comment}</span>
                  <span>{item.collection}</span>
                </div>
                <div className="rmdp_content_item_line3">
                  <span className="rmdp_line3_price">
                    <span>￥</span>
                    <em>{item.price}</em>
                  </span>
                  <span className="rmdp_line3_proceeds">月销{item.volume}笔</span>
                </div>
              </div>
              ))
            }
          </div>
          <div className="cnxh_footer">
            <i className="cnxh_end">END</i>
          </div>
        </div>
      </div>
    );
  }
}

export default CenterGuess;
