import {Router} from "express";
import {Response, Request} from "express";
import User from "../models/User";
import Answer from "../models/Answer";
import Poll from "../models/Poll";
import { Op } from "sequelize";
import Interviewer from "../models/Interviwer";
import Competence from "../models/Competence";
import Question from "../models/Question";


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

usersRouter.post("/results",
  async (req: Request, res: Response) => {
  try {
    const {user_id} = req.body;
    if(!user_id) {
      return res.status(400).json({
        message: "Отправлен некорректный id пользователя"
      });
    };

    const findedUser = await User.findOne({raw: true, where: {id: user_id}});
    if(!findedUser){
      return res.status(400).json({
        message: "Пользователь не найден"
      });
    }

    const polls = await Poll.findAll({raw: true, where:{appraisal_target_id: user_id}});
    const interviewers = await Interviewer.findAll({
      raw: true,
      where: {
        poll_id: {
          [Op.in]: polls.map((poll: any) => poll.id)
        }
      }
    });
    const answers = await Answer.findAll({
      raw: true,
      where: {
        interviewer_id: {
          [Op.in]: interviewers.map((inter: any) => inter.id)
        }
      }
    });

    const competences = await Competence.findAll({raw: true});
    const questions = await Question.findAll({raw: true});

    const compArrayAnswers = competences.reduce((arr: any, comp: any, i: number) => {
      const comp_answers = questions.reduce((arr: any, quest: any) => {
        if(quest.competence_id === comp.id){
          const answs: any = answers.filter((answ: any) => answ.question_id === quest.id);
          arr.push(answs[0].answer_variant_id)
        }
        return arr;
      }, []);

      arr.push({
        id: comp.id,
        competence: comp.competence,
        comp_answers
      });
      return arr;
    }, []);

    const compAnswers = compArrayAnswers.map((comp: any) => {
      const resultate = comp.comp_answers.reduce((prev: number, answ: any) => {
        return prev + answ;
      }, 0);
      return {id: comp.id, competence: comp.competence, result: resultate / (comp.comp_answers.length + 1)}
    })
    res.json(compAnswers);
  } catch (e) {
    console.log(e)
    res.status(500).json({message: "Что-то пошло не так"});
  }
});

export default usersRouter;