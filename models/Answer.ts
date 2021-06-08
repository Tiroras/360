import {Schema, model, Types} from "mongoose";
import {DataTypes, Model} from "sequelize";
import sequelize from "../db";


class Answer extends Model {};
Answer.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },

}, {sequelize, modelName: "answer"});

export default Answer;


// const schema = new Schema({
//   interviewer_id: {
//     type: Types.ObjectId,
//     ref: "interviewer"
//   },
//   question_id: {
//     type: Types.ObjectId,
//     ref: "question",
//   },
//   answer_variant_id: {
//     type: Types.ObjectId,
//     ref: "variant"
//   }
// })
//
// export default model("answer", schema);