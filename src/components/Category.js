import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import mongoose from 'mongoose';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import '../css/Category.css';
import HeaderMain from './HeaderMain';
import CategoryContainer from './content/CategoryContainer';

class Category extends Component {

  constructor (props, {match}) {
    super(props,{match});
  }


  render() {
    const { Content, Footer } = Layout;
    return (
        <Layout>
          <HeaderMain />
          <Content style={{ padding: '0 50px', marginTop: 50 }}>
            <CategoryContainer pagename={this.props.match.params.category} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>

              <p>My footer</p>

          </Footer>
        </Layout>

    );
  }
}

export default Category;
