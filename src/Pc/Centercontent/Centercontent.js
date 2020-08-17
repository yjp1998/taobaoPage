import React from 'react';
import './Centercontent.css';
import Contentleftnav from './Contentleftnav/Contentleftnav';
import Contentcenter from './Contentcenter/Contentcenter';
import Contentrightpart from './Contentrightpart/Contentrightpart'

function Centercontent() {
  return (
    <div class="center_content">
      <div class="center_content_wrap">
        <Contentleftnav />
        <Contentcenter />
        <Contentrightpart />
      </div>
    </div>
  );
}

export default Centercontent;
