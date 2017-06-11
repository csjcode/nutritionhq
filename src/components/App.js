import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import mongoose from 'mongoose';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import logo from '../images/logo.svg';
import '../css/App.css';
import FontAwesome from 'react-fontawesome';
import HeaderMain from '../components/HeaderMain';
import ContentContainer from '../components/ContentContainer';

class App extends Component {

  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <Router>
        <Layout>
          <HeaderMain />
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '12px 0', fontSize:16 }}>
              <Breadcrumb.Item><Link to="/"> Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/Foods">Foods</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/Vegetables">Vegetables</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/Spinach">Spinach</Link></Breadcrumb.Item>
            </Breadcrumb>

            <ContentContainer />

          </Content>
          <Footer style={{ textAlign: 'center' }}>
  My footer        </Footer>
        </Layout>
      </Router>





    );
  }
}

export default App;
