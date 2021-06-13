import {Sequelize} from "sequelize";


const sequelize = new Sequelize("s86206_db", "admin", "bugi2021", {
  dialect: "mysql",
  host: "31.172.66.143",
  define: {
    timestamps: false
  }
})

export default sequelize;