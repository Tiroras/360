export interface IUserInfo {
  id: number;
  user_name: string;
  user_position: string;
  isAdmin: boolean;
  login: string;
  email: string;
}

export interface ICompetence {
  id: number;
  competence: string;
  result: number
}
