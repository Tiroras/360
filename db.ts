import {Sequelize} from "sequelize";



const sequelize = new Sequelize("360", "root", "root", {
  dialect: "mysql",
  host: "360appraisal-test.ru",
  define: {
    timestamps: false
  }
})

export default sequelize;