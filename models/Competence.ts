import {DataTypes, Model} from "sequelize";
import sequelize from "../db";
import Question from "./Question";


class Competence extends Model {}
Competence.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  competence: {
    type: DataTypes.STRING
  }
}, {sequelize, modelName: "competences"});

Competence.hasMany(Question, {foreignKey: "competence_id"})

export default Competence;