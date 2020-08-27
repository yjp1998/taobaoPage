import React from 'react';
import './index.css';

class CenterShopLive extends React.Component {
  constructor() {
    super();
    this.state = {
      shopItemsInfo: [],
      liveItemsInfo: []
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        shopItemsInfo: [
          {
            title: '万能集市',
            itemUrl1: 'https://img.alicdn.com/bao/uploaded/i1/47967555/TB2AGgQaEyfF1Jjy0FbXXXSupXa_!!47967555.jpg_180x180q90.jpg_.webp',
            itemUrl2: 'https://img.alicdn.com/bao/uploaded/i1/47967555/TB2AGgQaEyfF1Jjy0FbXXXSupXa_!!47967555.jpg_180x180q90.jpg_.webp',
            itemUrl3: 'https://img.alicdn.com/bao/uploaded/i1/47967555/TB1Kky0bH1YBuNjSszeYXGblFXa_M2.SS2_100x100q90.jpg_.webp'
          },
          {
            title: '淘宝江湖',
            itemUrl1: 'https://img.alicdn.com/bao/uploaded/i2/634491/O1CN01T9PnWc1j2vIMn6gk2_!!634491.jpg_180x180q90.jpg_.webp',
            itemUrl2: 'https://img.alicdn.com/bao/uploaded/i4/634491/O1CN01rcRjum1j2vHqdK6if_!!634491.jpg_100x100q90.jpg_.webp',
            itemUrl3: 'https://img.alicdn.com/bao/uploaded/i1/634491/O1CN011zdSet1j2vImu4f7B_!!634491.jpg_100x100q90.jpg_.webp'
          },
          {
            title: '深藏不露',
            itemUrl1: 'https://img.alicdn.com/bao/uploaded/i2/TB1Zs1wLXXXXXXDaXXXXXXXXXXX_!!0-item_pic.jpg_180x180q90.jpg_.webp',
            itemUrl2: 'https://img.alicdn.com/bao/uploaded/i4/83254671/TB2wqC_cPnD8KJjSspbXXbbEXXa_!!83254671.jpg_100x100q90.jpg_.webp',
            itemUrl3: 'https://img.alicdn.com/bao/uploaded/i4/83254671/TB2DJn6aA6z11Bjy0FoXXbvkpXa_!!83254671.jpg_100x100q90.jpg_.webp'
          },
          {
            title: '高手林立',
            itemUrl1: 'https://img.alicdn.com/bao/uploaded/i1/48317215/O1CN01ehQZXZ23AWDj4DFIi_!!0-item_pic.jpg_180x180q90.jpg_.webp',
            itemUrl2: 'https://img.alicdn.com/bao/uploaded/i1/48317215/O1CN0127JwNZ23AWCGs7Xze_!!0-item_pic.jpg_100x100q90.jpg_.webp',
            itemUrl3: 'https://img.alicdn.com/bao/uploaded/i2/48317215/O1CN01q4UfUP23AWDj4CZio_!!0-item_pic.jpg_100x100q90.jpg_.webp'
          }
        ],
        liveItemsInfo: [
          {
            title: '儒雅品茶',
            itemUrl1: 'https://img.alicdn.com/imgextra/i2/6000000001761/TB2v6eYX8USMeJjy1zjXXc0dXXa_!!0-tbCommonAudio.jpg_180x180q90.jpg_.webp',
            itemUrl2: 'https://img.alicdn.com/bao/uploaded/i2/3171559893/TB2oCI4pYlmpuFjSZFlXXbdQXXa_!!3171559893.jpg_100x100q90.jpg_.webp',
            itemUrl3: 'https://img.alicdn.com/bao/uploaded/i1/3171559893/TB2AAtla2kmyKJjSZFmXXX1EFXa_!!3171559893.jpg_100x100q90.jpg_.webp',
            introduction: ' 今年中秋节送礼就凤凰'
          },
          {
            title: '王慧慧whhe',
            itemUrl1: 'https://img.alicdn.com/imgextra/i4/6000000002624/TB2QYtubk7OyuJjSsplXXXqdpXa_!!0-tbCommonAudio.jpg_180x180q90.jpg_.webp',
            itemUrl2: 'https://img.alicdn.com/bao/uploaded/i2/725467615/TB1EsyghlcHL1JjSZFBXXaiGXXa_!!0-item_pic.jpg_100x100q90.jpg_.webp',
            itemUrl3: 'https://img.alicdn.com/bao/uploaded/i1/725467615/TB1WbcpaX9gSKJjSspbXXbeNXXa_!!0-item_pic.jpg_100x100q90.jpg_.webp',
            introduction: ' 战狼同款两位数秒'
          },
          {
            title: '随心随意的大蓉',
            itemUrl1: 'https://img.alicdn.com/imgextra/i1/6000000002746/TB2Dt6weMoQMeJjy0FnXXb8gFXa_!!0-tbCommonAudio.jpg_180x180q90.jpg_.webp',
            itemUrl2: 'https://img.alicdn.com/bao/uploaded/i2/441622457/TB1k2y2flcHL1JjSZFBXXaiGXXa_!!0-item_pic.jpg_100x100q90.jpg_.webp',
            itemUrl3: 'https://img.alicdn.com/bao/uploaded/i1/725467615/TB1WbcpaX9gSKJjSspbXXbeNXXa_!!0-item_pic.jpg_100x100q90.jpg_.webp',
            introduction: ' 美妞们，和我一起做面'
          },
          {
            title: 'vivienn',
            itemUrl1: 'https://img.alicdn.com/tfscom/i2/84755152/TB2BUbueMMPMeJjy1XcXXXpppXa_!!0-dgshop.jpg_180x180q90.jpg_.webp',
            itemUrl2: 'https://img.alicdn.com/bao/uploaded/i2/441622457/TB1k2y2flcHL1JjSZFBXXaiGXXa_!!0-item_pic.jpg_100x100q90.jpg_.webp',
            itemUrl3: 'https://img.alicdn.com/bao/uploaded/i3/84755152/TB2sWt0eHsTMeJjy1zcXXXAgXXa_!!84755152.jpg_100x100q90.jpg_.webp',
            introduction: ' 心动穿搭上线，初秋随'
          },
        ]
      })
    }, 1000);
  }
  render() {
    return (
      <div className="center_hdzb" id="hdzb">
      <div className="center_hdzb_wrap">
        <div className="hdzb_shop">
          <div className="hdzb_shop_header">
            <img src="https://img.alicdn.com/tfs/TB1_EXwb3oQMeJjy0FpXXcTxpXa-162-48.png" alt="" />
            <span>发现深藏的好店</span>
          </div>
          <div className="hdzb_shop_content">
            <ul className="shopList">
              {
                this.state.shopItemsInfo.map((item) => (
                  <li>
                    <span>{item.title}</span>
                    <div className="shopList_imgWrap">
                      <img src={item.itemUrl1} />
                      <img src={item.itemUrl2} />
                      <img src={item.itemUrl3} />
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="hdzb_live">
          <div className="hdzb_live_header">
            <img src="https://img.alicdn.com/tfs/TB1cmpCb3MPMeJjy1XdXXasrXXa-204-42.png" alt="" />
            <span>你的爱豆直播等你哟！</span>
          </div>
          <div className="hdzb_live_content">
            <ul className="liveList">
              {
                this.state.liveItemsInfo.map((item) => (
                  <li>
                    <span className="liveList_title">{item.title}</span>
                    <div className="liveList_imgWrap">
                      <img
                        src={item.itemUrl1} />
                      <img
                        src={item.itemUrl2} />
                      <img
                        src={item.itemUrl3} />
                    </div>
                    <span><i className="iconfont">&#xe676;</i> {item.introduction}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default CenterShopLive;
