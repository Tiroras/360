import {Schema, model} from "mongoose"
import {DataTypes, Model} from "sequelize";
import sequelize from "../db";
import Answer from "./Answer";

// class Question extends Model {}
// Question.init({
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false
//   },
//   question: {
//     type: DataTypes.STRING
//   }
// }, {sequelize, modelName: "questions"});
// Question.hasMany(Answer, {foreignKey: "question_id"})
//
// export default Question;


const schema = new Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  }
})

module.exports = model("question", schema);