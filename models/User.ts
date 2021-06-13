import {Model, DataTypes} from "sequelize";
import sequelize from "../db";
import Interviewer from "./Interviwer";
import Poll from "./Poll";


class User extends Model {};

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  user_position: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  login: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  inSession: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {sequelize, modelName: 'user'});

User.hasMany(Interviewer, {foreignKey: "user_id"});
User.hasMany(Poll, {foreignKey: "appraisal_target_id"});

export default User;


// const schema = new Schema<TUserDocument>({
//   user_name: {
//     type: String,
//     required: true,
//   },
//   user_position: {
//     type: String,
//     required: true,
//   },
//   isAdmin: {
//     type: Boolean,
//     required: true,
//     default: false
//   },
//   login: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   inSession: {
//     type: Boolean,
//     required: true,
//     default: false
//   }
// });
//
// export default model<TUserDocument>("user", schema);