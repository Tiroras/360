import express, {json, urlencoded} from "express";
import sequelize from "./db";
import authRouter from "./routes/auth.routes";
import usersRouter from "./routes/users.routes";
import pollsRouter from "./routes/polls.routes";
import path from "path";


const app = express();
app.use(json());
app.use(urlencoded({extended: true}));
app.use('/api/auth', authRouter); 
app.use('/api/users', usersRouter);
app.use('/api/polls', pollsRouter);


if(process.env.NODE_ENV === 'production'){
  app.use("/", express.static(path.join(__dirname, 'client', 'build')));
//app.use(express.static('static'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await sequelize.sync({force: false}).then(() => {
      app.listen(PORT, () => console.log("Started: ", PORT));
    })
  } catch (e) {
    console.log("Server Error", e);
    process.exit(1);
  }
}

start();


