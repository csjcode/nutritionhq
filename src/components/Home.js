import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import mongoose from 'mongoose';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import logo from '../images/logo.svg';
import '../css/Home.css';
import HeaderMain from './HeaderMain';
import HomeContainer from './content/HomeContainer';
import Foods from './Foods';

class Home extends Component {

  constructor (props) {
    super(props);
  }


  render() {
    const { Header, Content, Footer } = Layout;
    return (
        <Layout>
          <HeaderMain />
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '12px 0', fontSize:16 }}>
              <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/Foods">Foods</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/Vegetables">Vegetables</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/Vegetables/Spinach">Spinach</Link></Breadcrumb.Item>
            </Breadcrumb>
            <HomeContainer />

          </Content>
          <Footer style={{ textAlign: 'center' }}>

              <p>My footer</p>

          </Footer>
        </Layout>

    );
  }
}

export default Home;
