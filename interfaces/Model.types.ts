import {Document} from "mongoose";


export interface TUserDocument extends Document{
  id: number;
  user_name: string;
  user_position: string;
  isAdmin: boolean;
  login: string;
  email: string;
  password: any;
  inSession: boolean;
}