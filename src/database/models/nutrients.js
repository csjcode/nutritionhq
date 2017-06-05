const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NutrientsSchema = new Schema({
  NDB_No: Number,
  Nutr_No: Number,
  Nutr_Val: Number,
  Num_Data_Pts: Number,
  Std_Error : Number,
  Src_Cd: Number,
  Deriv_Cd: String,
  Ref_NDB_No: String,
  Add_Nutr_Mark:String ,
  Num_Studies: Number,
  Min: Number,
  Max: Number,
  DF: Number,
  Low_EB: Number,
  Up_EB: Number,
  Stat_cmt: String,
  AddMod_Date: Date
});
// Todo: create Album Schema


module.exports = NutrientsSchema;
