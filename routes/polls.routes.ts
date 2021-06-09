import {Router} from "express";
import {Response, Request} from "express";
import Question from "../models/Question";
import Poll from "../models/Poll";
import User from "../models/User";
import { Op, fn, col } from "sequelize";


const pollsRouter: Router = Router();

pollsRouter.get("/",
  async (req: Request, res: Response) => {
    try {
      const polls = await Poll.findAll({
        raw: true,
        order: fn("max", col("appraisal_target_id"))
      });

      const target_users = await User.findAll({
        raw: true,
        attributes: ["user_name", "user_position", "login", "email"],
        where: {
          id: {
            [Op.in]: polls.map((poll: any) => poll.appraisal_target_id)
          }
        }
      });

      polls.reduce((polls: any, poll: any, i: number) => {
        polls.push(Object.assign(poll, target_users[i]))
      }, []);

      res.send(polls);
      res.status(201);
    } catch (e) {
      console.log(e);
      res.status(500).json({message: "Что-то пошло не так"});
    }
});

pollsRouter.get("/questions",
  async (req: Request, res: Response) => {
  try {
    const questions = await Question.findAll({raw: true});
    res.send(questions);
    res.status(201);
  } catch (e) {
    console.log(e);
    res.status(500).json({message: "Что-то пошло не так"});
  }
})

export default pollsRouter;