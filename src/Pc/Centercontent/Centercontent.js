import React from 'react';
import './Centercontent.css';
import Contentleftnav from './Contentleftnav/Contentleftnav';
import Contentcenter from './Contentcenter/Contentcenter';
import Contentrightpart from './Contentrightpart/Contentrightpart'

class Centercontent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
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
}

export default Centercontent;
