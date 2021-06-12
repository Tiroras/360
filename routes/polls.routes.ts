import {Router} from "express";
import {Response, Request} from "express";
import Question from "../models/Question";
import Poll from "../models/Poll";
import User from "../models/User";
import { Op } from "sequelize";
import Interviewer from "../models/Interviwer";
import Answer from "../models/Answer";
import Variant from "../models/Variant";


const pollsRouter: Router = Router();

pollsRouter.post("/",
  async (req: Request, res: Response) => {
    try {
      const {userId} = req.body;
      if(userId === 0){
        return res.status(400).json({
          message: "Войдите в систему"
        });
      }

      const interPollId: any = await Interviewer.findAll({
        raw: true,
        attributes: ["id", "poll_id"],
        where: {
          user_id: userId,
          isPassed: 0
        }
      });
      if(interPollId.length === 0){
        res.json([]);
      } else {
        const polls = await Poll.findAll({
          raw: true,
          order: ["appraisal_target_id"],
          where: {
            id: {
              [Op.or]: interPollId.map(pollId => pollId.poll_id)
            },
            isOver: 0
          }
        });

        if(polls.length === 0){
          return res.status(500).json({message: "Опросы не найдены"})
        }
        const target_users = await User.findAll({
          raw: true,
          attributes: ["id", "user_name", "user_position"],
          where: {
            id: {
              [Op.in]: polls.map((poll: any) => poll.appraisal_target_id)
            }
          }
        });

        const resPolls = polls.reduce((array: any, poll: any, i: number) => {
          array.push({id: poll.id, inter_id: interPollId[i].id, userInfo: target_users[i]});
          return array;
        }, []);
        res.json(resPolls);
      }

    } catch (e) {
      console.log(e);
      res.status(500).json({message: "Что-то пошло не так"});
    }
});

pollsRouter.get("/admin",
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

pollsRouter.post("/admin",
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
    res.status(201).json({message: "Опрос создан создан"});
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

pollsRouter.post("/admin/interviewers",
  async (req: Request, res: Response) => {
  try {
    const {polls, userId} = req.body;
    if(!polls && userId.length === 0){
      return res.status(400).json({
        message: "Что-то не так с отправленными данными. Проверьте, выбрали ли вы опрос или пользователей"
      });
    }

    const findedInter = await Interviewer.findOne({
      raw: true,
      where: {
        user_id:
          {
            [Op.or]: userId
          },
        poll_id: polls}
    });

    if(findedInter){
      return res.status(400).json({
        message: "Пользователь уже имеет возможность дать оценку по этому опросу"
      });
    }

    userId.map((id) => {
      const inter = new Interviewer({poll_id: polls, user_id: id, isPassed: false});
      inter.save();
    })

  } catch (e) {
    console.log(e);
    res.status(500).json({message: "Что-то пошло не так"});
  }
});

pollsRouter.post("/answers",
  async (req: Request, res: Response) => {
  try {
    const {answers, id: poll_id, inter_id} = req.body;
    if(!inter_id || poll_id){
      return res.status(400).json({
        message: "Ошибка, не получен id"
      });
    }

    await answers.shift();
    const numbers = await answers.map((answ) => {
      switch (answ) {
        case 'agree': return 1;
        case 'rather-agree': return 2;
        case 'not-sure': return 3;
        case 'rather-not-agree': return 4;
        case 'not-agree': return 5;
        default: return 0;
      }
    });
    console.log(Answer);
    const variants = await Variant.findAll({raw: true});
    console.log(variants);
    await numbers.map((answ, i) => {
      // console.log("Перед отправкой: ", answ)
      // const answer = new Answer({answer_variant_id: answ, interviewer_id: inter_id, question_id: i+1});
      // console.log(answer)
      // answer.save();
      Answer.create({answer_variant_id: answ, interviewer_id: inter_id, question_id: i+1})
        .catch(e => console.log(e))
    });
    await Interviewer.update({isPassed: true}, {where: {id: inter_id}});
  } catch (e) {
    console.log(e);
    res.status(500).json({message: "Что-то пошло не так"});
  }
});

export default pollsRouter;