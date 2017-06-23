import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import FontAwesome from 'react-fontawesome';
import ItemData from './ItemData.js';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../../css/ItemContainer.css';

class ItemContainer extends Component {
  state = {
    dataLong_Desc: ''
  };

  constructor(props) {
    super(props);
  }

  loadData(){
    fetch('http://localhost:3000/food/id/1010')
      .then(response => {
        return response.json()
      }).then(json => {
        var Long_Desc = json.Long_Desc;
        this.setState({
          dataLong_Desc: Long_Desc
        });
      }).catch(ex => {
        console.log('parsing failed', ex)
      });
  }

  componentDidMount(){
    this.loadData()

  }

  render() {
    return(
      <div style={{ background: '#fff', padding: '40px', minHeight: '380px' }}>
        <div style={{backgroundColor:'#fff', color:'#000', fontSize:'17px',
          marginTop: '40',paddingTop:'15px', textAlign: 'left'}}>
          <div style={{marginBottom:'20px'}}>
            <h1 style={{fontSize:'28px', marginTop:'0', marginBottom:'0'}}>{this.props.pagename}</h1>
            <p style={{fontSize:'16px', color:'#939393'}}>This is the subheading for {this.props.itemNum}</p>
            <div>{this.state.dataLong_Desc}</div>
            <ItemData pagename={this.props.pagename}/>



          </div>
        </div>
      </div>
    );
  }
}

export default ItemContainer;
