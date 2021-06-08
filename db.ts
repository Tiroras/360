import {Sequelize} from "sequelize";


const sequelize = new Sequelize("360", "root", "", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false
  }
})

export default sequelize;