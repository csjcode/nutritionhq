import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Header } from 'antd';
import 'antd/dist/antd.css';

class HeaderMain extends Component {
  render() {
    const { Header, Content, Footer } = Layout;
    return(
      <Router>
        <Header style={{ position: 'fixed', width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', fontSize:18 }}
          >
            <Menu.Item key="1"><Link to="/Foods">Foods</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/Meals">Meals</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/Supplements">Supplements</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/Research">Research</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/News">News</Link></Menu.Item>
          </Menu>
        </Header>
      </Router>
    );
  }
}

export default HeaderMain;
