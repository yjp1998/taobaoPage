import React from 'react';
import './index.css';
import Header from './Header/index';
import HeaderSearch from './HeaderSearch/index';
import CenterNav from './CenterNav/index';
import CenterContent from './CenterContent/index'
import CenterGoods from './CenterGoods/index';
import CenterShopLive from './CenterShopLive/index';
import CentertCharateristic from './CentertCharateristic/index';
import CenterHotSell from './CenterHotSell/index';
import CenterGuess from './CenterGuess/index';
import RightNav from './RightNav/index';
import Help from './Help/index';
import Footer from './Footer/index';

class Pc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="pc">
        <Header />
        <HeaderSearch />
        <CenterNav />
        <CenterContent />
        <CenterGoods />
        <CenterShopLive />
        <CentertCharateristic />
        <CenterHotSell />
        <CenterGuess />
        <RightNav />
        <Help />
        <Footer />
      </div>
    );
  }
}

export default Pc;
