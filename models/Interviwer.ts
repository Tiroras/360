import {Schema, model, Types} from "mongoose";
import {DataTypes, Model} from "sequelize";
import sequelize from "../db";
import Answer from "./Answer";


class Interviewer extends Model {}
Interviewer.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  isPassed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {sequelize, modelName: 'interviewer'});

Interviewer.hasMany(Answer, {foreignKey: "interviewer_id"});

export default Interviewer;

// const schema = new Schema({
//   poll_id: {
//     type: Types.ObjectId,
//     ref: 'poll'
//   },
//   user_id: {
//     type: Types.ObjectId,
//     ref: "user"
//   },
//   isPassed: {
//     type: Boolean,
//     default: false
//   }
// })
//
// export default model("interviewer", schema);