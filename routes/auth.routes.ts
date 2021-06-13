import {Router} from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import {check, validationResult} from "express-validator";
import jwt from "jsonwebtoken";
import {Response, Request} from "express";
import createLogin from "../utilities/CreateLogin";


const authRouter: Router = Router();
authRouter.post('/register',
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимальная длина пароля 6 символов")
      .isLength({min: 6}),
    check("password_again", "Минимальная длина пароля 6 символов")
      .isLength({min: 6}),
    check(["name", "family", "patronymic", "position",], "Введите имя и должность")
      .isLength({min: 3})
  ],
  async (req: Request, res: Response) => {
  try{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array(),
        message: "Некорректные данные при регистрации"
      })
    }

    const {email, password, position: user_position, password_again} = req.body;
    if(!(password === password_again)){
      return res.status(400).json({
        message: "Пароли не совпадают"
      });
    }

    const user_name = req.body.family + " " + req.body.name + " " + req.body.patronymic;
    const login = createLogin();
    const candidate = await User.findOne({where: {email}});
    if(candidate) {
      res.status(400).json({message: "Такой пользователь уже существует"});
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({email, password: hashedPassword, user_name, user_position, login});
    await user.save();
    res.status(201).json({message: "Пользователь создан"})
  } catch (e) {
    console.log(e)
    res.status(500).json({message: "Что-то пошло не так"});
  }
});

authRouter.post('/login',
  [
    check('email', "Введите корректый email").exists().normalizeEmail().isEmail(),
    check("password", "Ввведите пароль").exists()
  ],
  async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array(),
        message: "Некорректные данные при входе"
      })
    }
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}}).then((data: any) => {
      return data.dataValues
    });
    if(!user){
      return res.status(400).json({message: "Пользователь не найден"});
    }
    const userPassword = user.password;
    const isMatch = await bcrypt.compare(password, userPassword);
    if(!isMatch){
      return res.status(400).json({message: "Неверный пароль, попоробуйте снова"});
    }
    const token = jwt.sign(
      {userId: user.id},
      "tuturu",
      {expiresIn: "1h"}
    )
    res.json({token, userInfo: user});
  } catch (e) {
    console.log("You here", e)
    res.status(500).json({message: "Что-то пошло не так"});
  }
});


export default authRouter;