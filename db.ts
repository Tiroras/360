import {Sequelize} from "sequelize";



const sequelize = new Sequelize("360", "root", "", {
  dialect: "mysql",
  host: "http://31.172.66.143",
  define: {
    timestamps: false
  }
})

export default sequelize;