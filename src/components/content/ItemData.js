import React, { Component } from 'react';
import mongoose from 'mongoose';

class ItemData extends Component {

  constructor (props) {
    let myData = [];
    super(props);
    // this.state = { page: this.props.pagename };
    this.state = { page: this.props.pagename };
  }

  componentWillMount() {
  }

  searchObj(name, myArray){
    var obj = myArray.filter(function ( obj ) {
      if (obj.Long_Desc === name){
        let termNoSpaces = obj.Long_Desc.replace(/[^A-Za-z]+/g, '-');
        return console.log(termNoSpaces);
      }

    })[0];
  }

  render () {
    let myData = [
      {
          "NDB_No" : 1001,
          "FdGrp_Cd" : 100,
          "Long_Desc" : "Butter, salted",
          "Shrt_Desc" : "BUTTER,WITH SALT",
          "ComName" : "",
          "ManufacName" : "",
          "Survey" : "Y",
          "Ref_desc" : "",
          "Refuse" : 0,
          "SciName" : "",
          "N_Factor" : 6.38,
          "Pro_Factor" : 4.27,
          "Fat_Factor" : 8.79,
          "CHO_Factor" : 3.87
      },
      {
          "NDB_No" : 1002,
          "FdGrp_Cd" : 100,
          "Long_Desc" : "Butter, whipped, with salt",
          "Shrt_Desc" : "BUTTER,WHIPPED,W/ SALT",
          "ComName" : "",
          "ManufacName" : "",
          "Survey" : "Y",
          "Ref_desc" : "",
          "Refuse" : 0,
          "SciName" : "",
          "N_Factor" : 6.38,
          "Pro_Factor" : "",
          "Fat_Factor" : "",
          "CHO_Factor" : ""
      },
      {
          "NDB_No" : 1003,
          "FdGrp_Cd" : 100,
          "Long_Desc" : "Butter oil, anhydrous",
          "Shrt_Desc" : "BUTTER OIL,ANHYDROUS",
          "ComName" : "",
          "ManufacName" : "",
          "Survey" : "Y",
          "Ref_desc" : "",
          "Refuse" : 0,
          "SciName" : "",
          "N_Factor" : 6.38,
          "Pro_Factor" : 4.27,
          "Fat_Factor" : 8.79,
          "CHO_Factor" : 3.87
      },
      {
          "NDB_No" : 1004,
          "FdGrp_Cd" : 100,
          "Long_Desc" : "Cheese, blue",
          "Shrt_Desc" : "CHEESE,BLUE",
          "ComName" : "",
          "ManufacName" : "",
          "Survey" : "Y",
          "Ref_desc" : "",
          "Refuse" : 0,
          "SciName" : "",
          "N_Factor" : 6.38,
          "Pro_Factor" : 4.27,
          "Fat_Factor" : 8.79,
          "CHO_Factor" : 3.87
      },
      {
          "NDB_No" : 1005,
          "FdGrp_Cd" : 100,
          "Long_Desc" : "Cheese, brick",
          "Shrt_Desc" : "CHEESE,BRICK",
          "ComName" : "",
          "ManufacName" : "",
          "Survey" : "Y",
          "Ref_desc" : "",
          "Refuse" : 0,
          "SciName" : "",
          "N_Factor" : 6.38,
          "Pro_Factor" : 4.27,
          "Fat_Factor" : 8.79,
          "CHO_Factor" : 3.87
      },
      {
          "NDB_No" : 1006,
          "FdGrp_Cd" : 100,
          "Long_Desc" : "Cheese, brie",
          "Shrt_Desc" : "CHEESE,BRIE",
          "ComName" : "",
          "ManufacName" : "",
          "Survey" : "Y",
          "Ref_desc" : "",
          "Refuse" : 0,
          "SciName" : "",
          "N_Factor" : 6.38,
          "Pro_Factor" : 4.27,
          "Fat_Factor" : 8.79,
          "CHO_Factor" : 3.87
      },
      {
          "NDB_No" : 1007,
          "FdGrp_Cd" : 100,
          "Long_Desc" : "Cheese, camembert",
          "Shrt_Desc" : "CHEESE,CAMEMBERT",
          "ComName" : "",
          "ManufacName" : "",
          "Survey" : "Y",
          "Ref_desc" : "",
          "Refuse" : 0,
          "SciName" : "",
          "N_Factor" : 6.38,
          "Pro_Factor" : 4.27,
          "Fat_Factor" : 8.79,
          "CHO_Factor" : 3.87
      },
      {
          "NDB_No" : 1008,
          "FdGrp_Cd" : 100,
          "Long_Desc" : "Cheese, caraway",
          "Shrt_Desc" : "CHEESE,CARAWAY",
          "ComName" : "",
          "ManufacName" : "",
          "Survey" : "",
          "Ref_desc" : "",
          "Refuse" : 0,
          "SciName" : "",
          "N_Factor" : 6.38,
          "Pro_Factor" : 4.27,
          "Fat_Factor" : 8.79,
          "CHO_Factor" : 3.87
      },
      {
          "NDB_No" : 1009,
          "FdGrp_Cd" : 100,
          "Long_Desc" : "Cheese, cheddar",
          "Shrt_Desc" : "CHEESE,CHEDDAR",
          "ComName" : "",
          "ManufacName" : "",
          "Survey" : "Y",
          "Ref_desc" : "",
          "Refuse" : 0,
          "SciName" : "",
          "N_Factor" : "",
          "Pro_Factor" : "",
          "Fat_Factor" : "",
          "CHO_Factor" : ""
      }
    ];

    return (
      <div>
        <div>This is {this.state.page}</div>
        <div>{this.searchObj('Cheese, cheddar', myData)}</div>
      </div>

    );
  }
}

export default ItemData;
