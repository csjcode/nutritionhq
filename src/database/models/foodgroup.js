const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodGroupSchema = new Schema({
  FdGrp_Cd: Number,
  FdGrp_Desc: String
});
// Todo: create Album Schema


module.exports = FoodGroupSchema;
