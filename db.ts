import {Sequelize} from "sequelize";



const sequelize = new Sequelize("360", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  port: 5000,
  define: {
    timestamps: false
  }
})

export default sequelize;