import {Router} from "express";
import {Response, Request} from "express";
import User from "../models/User";


const usersRouter: Router = Router();

usersRouter.get('/',
  async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({raw: true});
    res.send(users);
    res.status(201)
  } catch (e) {
    console.log(e)
    res.status(500).json({message: "Что-то пошло не так"});
  }
});

export default usersRouter;