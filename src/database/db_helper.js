// Load mongoose package
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://localhost/nhq/');
// Create a schema
const NutrientSchema = new Schema({
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



// Create a model based on the schema
var Food = mongoose.model('Food', FoodSchema);

Food.find(function (err, foods) {
  if (err) return console.error(err);
  console.log(foods)
});
