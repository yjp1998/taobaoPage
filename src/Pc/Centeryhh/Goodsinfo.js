import React from 'react';

function GoodsInfo(props) {
  return (
    <li>
      <img src={props.goodsUrl} />
      <div className="goodsInfo">
        <h4>{props.title}</h4>
        <span>{props.introduction}</span>
        <div>
          <i className="iconfont">&#xe627;</i>
          {props.comment}
        </div>
      </div>
    </li>
  )
};

export default GoodsInfo;
