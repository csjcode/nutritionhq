import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

class CategoryList extends Component {
  // constructor (props) {
  //   super(props);
  // }

  componentWillMount () {
    // add event listeners (Flux Store, WebSocket, document, etc.)
  }

  componentDidMount () {
    // React.getDOMNode()
  }

  render () {
    return (
      <Card style={{ width: 240 }} bodyStyle={{ padding: 0, zIndex:-999 }}>
        <div className="custom-image">
          <img alt="example" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nutrition_label.gif/234px-Nutrition_label.gif" />
        </div>
        <div className="custom-card">
          <h3>Nutrition</h3>
          <p>www.instagram.com</p>
        </div>
      </Card>
    );
  }
}

export default CategoryList;
