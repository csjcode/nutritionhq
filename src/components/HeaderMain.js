import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Header } from 'antd';
import 'antd/dist/antd.css';
import Foods from './Foods.js';

class HeaderMain extends Component {

  constructor (props) {
    super(props);

    this.images = {
      logo: require('../images/logo.png')
    };
  }

  render() {
    const { Header, Content, Footer } = Layout;
    return(
        <Header style={{ position: 'fixed', width: '100%', zIndex:999 }}>


          <img src={this.images.logo} style={{display:"inline", float:'left', marginTop:'12', marginRight:'10'}} alt="HealthBenefits.io"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', fontSize:18, display:"inline" }}
          >
            <Menu.Item key="1"><Link to="/Foods">Foods</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/Meals">Meals</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/Supplements">Supplements</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/Research">Research</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/News">News</Link></Menu.Item>
          </Menu>
        </Header>
    );
  }
}

export default HeaderMain;
