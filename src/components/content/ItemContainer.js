import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import FontAwesome from 'react-fontawesome';
import ItemData from './ItemData.js';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../../css/ItemContainer.css';

class ItemContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
         jsonData: ''
      }


  }
  getFood(idnum){
    fetch('http://localhost:3000/food/id/' + idnum)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json: ', json.Long_Desc)
        this.setState({
          jsonData: json.Long_Desc
        });
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
  render() {
    return(
      <div style={{ background: '#fff', padding: '40px', minHeight: '380px' }}>
        <div style={{backgroundColor:'#fff', color:'#000', fontSize:'17px',
          marginTop: '40',paddingTop:'15px', textAlign: 'left'}}>
          <div style={{marginBottom:'20px'}}>
            <h1 style={{fontSize:'28px', marginTop:'0', marginBottom:'0'}}>{this.props.pagename}</h1>
            <p style={{fontSize:'16px', color:'#939393'}}>This is the subheading for {this.props.itemNum}</p>


            <ItemData pagename={this.props.pagename}/>
            <div>{this.state.jsonData}</div>

          </div>
        </div>
      </div>
    );
  }
}

export default ItemContainer;
