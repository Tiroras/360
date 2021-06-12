import {Schema, model} from "mongoose"
import {Model, DataTypes} from "sequelize";
import sequelize from "../db";
import Answer from "./Answer";


class Variant extends Model {}
Variant.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  variant: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  variant_text: {
    type: DataTypes.STRING(35),
    allowNull: false
  }
}, {sequelize, modelName: "variant"});

Variant.hasMany(Answer, {foreignKey: "answer_variant_id"});

export default Variant;

// const schema = new Schema({
//   variant: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   variant_text: {
//     type: String,
//     required: true,
//     unique: true,
//   }
// })
//
// export default model("variant", schema);