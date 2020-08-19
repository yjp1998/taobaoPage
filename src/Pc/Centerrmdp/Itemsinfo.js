import React from 'react';

function Itemsinfo(props) {
  return (
    <div className="rmdp_content_item">
    <div className="rmdp_content_item_img">
      <img
        src={props.itemUrl} />
    </div>
    <span className="rmdp_content_item_line1">
      {props.title}
    </span>
    <div className="rmdp_content_item_line2">
      <span>{props.comment}</span>
      <span>{props.collection}</span>
    </div>
    <div className="rmdp_content_item_line3">
      <span className="rmdp_line3_price">
        <span>￥</span>
        <em>{props.price}</em>
      </span>
      <span className="rmdp_line3_proceeds">月销{props.volume}笔</span>
    </div>
  </div>
  )
};

export default Itemsinfo;
