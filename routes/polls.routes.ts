import {Router} from "express";
import {Response, Request} from "express";
import Question from "../models/Question";
import Poll from "../models/Poll";
import User from "../models/User";
import { Op } from "sequelize";


const pollsRouter: Router = Router();

pollsRouter.get("/",
  async (req: Request, res: Response) => {
    try {
      const polls = await Poll.findAll({
        raw: true,
        order: ["appraisal_target_id"]
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
      polls.reduce((array: any, poll: any, i: number) => {
        array.push(Object.assign(poll, target_users[i]));
        return array;
      }, []);
      res.send(polls);
      res.status(201);
    } catch (e) {
      console.log(e);
      res.status(500).json({message: "Что-то пошло не так"});
    }
});

pollsRouter.post("/",
  async (req: Request, res: Response) => {
  try {
    const {users} = req.body;
    const hasPoll = await Poll.findOne({where: {appraisal_target_id: users, isOver: false}});

    if(hasPoll){
      return res.status(400).json({
        message: "Такой опрос уже существует"
      });
    }
    const poll = new Poll({appraisal_target_id: users, isOver: false});
    await poll.save();
    res.status(201).json({message: "Опрос создан создан"})
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
});

pollsRouter.post("/interviewers",
  async (req: Request, res: Response) => {
  try {

  } catch (e) {
    console.log(e)
    res.status(500).json({message: "Что-то пошло не так"});
  }
});

export default pollsRouter;