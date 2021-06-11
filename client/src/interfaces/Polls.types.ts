export type TPollInfo = {
  id: number;
  user_name: string;
  user_position: string;
}

export type TPoll = {
  id: number;
  userInfo: TPollInfo;
}

export type TQuestion = {
  id: number;
  competence_id: number;
  question: string;
}