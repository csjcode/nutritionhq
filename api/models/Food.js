// template: https://github.com/csjcode/mongo-upstarmusic/blob/master/database/models/artist.js

const mongoose = require('mongoose');
const NutrientSchema = require('./Nutrients');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  NDB_No: Number,
  FdGrp_Cd: Number,
  Long_Desc: String,
  Shrt_Desc: String,
  ComName: String,
  ManufacName: Number,
  Survey: Boolean,
  Ref_desc: String,
  Refuse: Number,
  SciName: String,
  N_Factor: Number,
  Pro_Factor: Number,
  Fat_Factor: Number,
  CHO_Factor: Number,
  nutrients: [NutrientSchema]
});

const Food = mongoose.model('food', FoodSchema);

module.exports = Food;
