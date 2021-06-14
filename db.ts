import {Sequelize} from "sequelize";



const sequelize = new Sequelize("360", "root", "root", {
  dialect: "mysql",
  host: "31.172.66.143",
  port: 5000,
  define: {
    timestamps: false
  }
})

export default sequelize;