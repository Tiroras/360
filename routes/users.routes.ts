import {Router} from "express";
import {Response, Request} from "express";
import User from "../models/User";
import Competence from "../models/Competence";
import Answer from "../models/Answer";
import Poll from "../models/Poll";
import { Op } from "sequelize";
import Interviewer from "../models/Interviwer";


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
  };

  const competences = await Competence.findAll({raw: true});
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
  console.log("Polls: ", polls);
  console.log("Inters: ", interviewers);
  console.log("answers: ", answers);
});

export default usersRouter;