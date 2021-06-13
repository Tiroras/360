import {DataTypes, Model} from "sequelize";
import sequelize from "../db";
import Interviewer from "./Interviwer";

class Poll extends Model {}
Poll.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  isOver: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {sequelize, modelName: 'poll'});

Poll.hasMany(Interviewer, {foreignKey: "poll_id"});

export default Poll;

// const schema = new Schema({
//   appraisal_target_id: {
//     type: Types.ObjectId,
//     ref: "user"
//   },
//   isOver: {
//     type: Boolean,
//     default: false
//   }
// })
//
// export default model("poll", schema);