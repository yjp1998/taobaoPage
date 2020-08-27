import React from 'react';
import './index.css';
import ContentLeftNav from './ContentLeftNav/index';
import ContentCenter from './ContentCenter/index';
import ContentRightPart from './Contentrightpart/index'

class CenterContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div class="center_content">
        <div class="center_content_wrap">
          <ContentLeftNav />
          <ContentCenter />
          <ContentRightPart />
        </div>
      </div>
    );
  }
}

export default CenterContent;
