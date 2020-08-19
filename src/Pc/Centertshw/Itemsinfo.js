import React from 'react';

function Itemsinfo(props) {
  return (
    <div className="content_item">
      <div className="item_info">
        <span>{props.title}</span>
        <span>{props.introduction}</span>
      </div>
     <div className="item_img">
       <img
         src={props.itemUrl}/>
     </div>
   </div>
  )
};

export default Itemsinfo;
