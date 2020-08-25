import React from 'react';
import './Centertshw.css';

class Centertshw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInfo: []
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        itemsInfo: [
          {
            title: '拍卖',
            introduction: '一元起拍捡漏',
            itemUrl: 'https://img.alicdn.com/bao/uploaded/i1/O1CN01UIZL5G25dwtksOmab_!!0-paimai.jpg_120x120q90.jpg_.webp'
          },
          {
            title: '淘小铺',
            introduction: '每月多赚1000元',
            itemUrl: 'https://img.alicdn.com/tfs/TB1NvbKL7L0gK0jSZFAXXcA9pXa-200-200.jpg_120x120q90.jpg_.webp'
          },
          {
            title: '造点新货',
            introduction: '球创意众筹平台',
            itemUrl: 'https://img.alicdn.com/tfs/TB1F_2nLEH1gK0jSZSyXXXtlpXa-150-150.png_120x120q90.jpg_.webp'
          },
          {
            title: '淘宝心选',
            introduction: '美好而有用',
            itemUrl: 'https://img.alicdn.com/tfs/TB13ZfrLAY2gK0jSZFgXXc5OFXa-150-150.png_120x120q90.jpg_.webp'
          }
        ]
      })
    }, 1000);
  }
  render() {
    return (
      <div className="center_tshw" id="tshw">
        <div className="center_tshw_wrap">
          <div className="tshw_leftPart">
            <div className="tshw_leftPart_header">
              | 特色好物
            </div>
            <div className="tshw_leftPart_content">
              {
                this.state.itemsInfo.map((item) => (
                  <div className="content_item">
                  <div className="item_info">
                    <span>{item.title}</span>
                    <span>{item.introduction}</span>
                  </div>
                 <div className="item_img">
                   <img
                     src={item.itemUrl}/>
                 </div>
               </div>
                ))
              }
            </div>
          </div>
          <div className="tshw_rightPart">
            <img src="https://img.alicdn.com/simba/img/TB1O4QQMKL2gK0jSZFmSuw7iXXa.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Centertshw;
