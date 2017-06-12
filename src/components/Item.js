import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import mongoose from 'mongoose';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import logo from '../images/logo.svg';
import '../css/Item.css';
import HeaderMain from './HeaderMain';
import ItemContainer from './content/ItemContainer';
import Foods from './Foods';

class Item extends Component {

  render() {
    const { Header, Content, Footer } = Layout;
    return (
        <Layout>
          <HeaderMain />
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <ItemContainer pagename={this.props.match.params.item}/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
              My footer
          </Footer>
        </Layout>

    );
  }
}

export default Item;
