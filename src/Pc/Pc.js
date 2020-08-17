import React from 'react';
import './Pc.css';
import Header from './Header/Header';
import Headersearch from './Headersearch/Headersearch';
import Centernav from './Centernav/Centernav';
import Centercontent from './Centercontent/Centercontent'
import Centeryhh from './Centeryhh/Centeryhh';
import Centerhdzb from './Centerhdzb/Centerhdzb';
import Centertshw from './Centertshw/Centertshw';
import Centerrmdp from './Centerrmdp/Centerrmdp';
import Centercnxh from './Centercnxh/Centercnxh';
import Rightnav from './Rightnav/Rightnav';
import Help from './Help/Help';
import Footer from './Footer/Footer';

function Pc() {
  return (
    <div className="pc">
      <Header />
      <Headersearch />
      <Centernav />
      <Centercontent />
      <Centeryhh />
      <Centerhdzb />
      <Centertshw />
      <Centerrmdp />
      <Centercnxh />
      <Rightnav />
      <Help />
      <Footer />
    </div>
  );
}

export default Pc;
