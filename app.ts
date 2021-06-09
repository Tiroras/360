import express, {json, urlencoded} from "express";
import mongoose from "mongoose";
import sequelize from "./db";
import authRouter from "./routes/auth.routes";
import usersRouter from "./routes/users.routes";
import pollsRouter from "./routes/polls.routes";


const app = express();
app.use(json());
app.use(urlencoded({extended: true}));
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/polls', pollsRouter);


async function start() {
  try {
    // await mongoose.connect("mongodb+srv://Londos:lamyke@cluster0.illbk.mongodb.net/test?retryWrites=true&w=majority", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true
    // })
    sequelize.authenticate().then(() => {
      app.listen(5000, () => console.log("Started"));
    })
  } catch (e) {
    console.log("Server Error", e);
    process.exit(1);
  }
}

start();


