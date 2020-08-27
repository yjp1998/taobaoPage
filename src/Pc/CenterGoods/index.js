import React from 'react';
import './index.css';

class CenterGoods extends React.Component {
  constructor() {
    super();
    this.state = {
      goodsInfo: []
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        goodsInfo: [
          {
            title: '大豆家 方头奶奶鞋',
            introduction: '一脚蹬设计，方便日常的',
            comment: '3758 人说好',
            goodsUrl: 'https://img.alicdn.com/tfscom/i1/1581756766/TB2TF0ch0zJ8KJjSspkXXbF7VXa_!!1581756766.jpg_180x180xzq90.jpg_.webp'
            },
            {
            title: '佳宝路转角水槽',
            introduction: '304不锈钢，表面光洁坚固',
            comment: '122 人说好',
            goodsUrl: 'https://img.alicdn.com/tfscom/i3/2459354798/TB2IyE5eUhnpuFjSZFpXXcpuXXa_!!2459354798.jpg_180x180xzq90.jpg_.webp'
            },
            {
            title: '肖优秀真皮细高跟过膝',
            introduction: '细跟尖头设计更显优雅女',
            comment: '68 人说好',
            goodsUrl: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_180x180xzq90.jpg_.webp'
            },
            {
            title: '低热量保持好身材，来',
            introduction: '低热量，鲜咸味，超',
            comment: '41 人说好',
            goodsUrl: 'https://img.alicdn.com/imgextra/i3/3778221387/TB2hRCYtyOYBuNjSsD4XXbSkFXa_!!3778221387-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp'
            },
            {
            title: '入户鞋底清洁神器，让',
            introduction: '这款鞋底清洁神器，节能',
            comment: '92 人说好',
            goodsUrl: 'https://img.alicdn.com/imgextra/i4/111676913/TB2QvjxnN1YBuNjy1zcXXbNcXXa_!!111676913-2-beehive-scenes.png_180x180xzq90.jpg_.webp'
            },
            {
            title: '让人口味大开 盐城特产',
            introduction: '民间独特风味的宫廷点',
            comment: '18 人说好',
            goodsUrl: 'https://img.alicdn.com/tfscom/i1/1581756766/TB2TF0ch0zJ8KJjSspkXXbF7VXa_!!1581756766.jpg_180x180xzq90.jpg_.webp'
            }
        ]
      })
    }, 1000);
    clearInterval();
  }
  render() {
    return (
      <div className="center_youhaohuo" id="youhaohuo">
        <div className="center_youhaohuo_wrap">
          <div className="youhaohuo_header">
            <img src="https://img.alicdn.com/tfs/TB1tqpnegMPMeJjy1XcXXXpppXa-148-48.png" alt="" />
            <span>与品质生活不期而遇</span>
          </div>
          <div className="youhaohuo_content">
            <ul className="goodsList">
              {
                this.state.goodsInfo.map((item) => (
                  <li>
                    <img src={item.goodsUrl} />
                    <div className="goodsInfo">
                      <h4>{item.title}</h4>
                      <span>{item.introduction}</span>
                      <div>
                        <i className="iconfont">&#xe627;</i>
                        {item.comment}
                      </div>
                    </div>
                  </li>
                  ))
                }
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
}

export default CenterGoods;
