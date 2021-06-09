export type TPoll = {
  id: number;
  emp_name: string;
  emp_position: string;
  isPassed: boolean;
}

export type TQuestion = {
  id: number;
  competence_id: number;
  question: string;
}