import {TPoll, TQuestion} from "../interfaces/Polls.types";


const initialState = {
  polls:[],
  questions: [],
  currentPoll: {}
}

type TState = typeof initialState;
type PollsActionType = ReturnType<typeof setPollsAC> | ReturnType<typeof removePollAC> |
  ReturnType<typeof setQuestionsAC> | ReturnType<typeof setCurrentPollAC>;

const poolsReducer = (state: TState = initialState, action: PollsActionType) => {
  switch (action.type) {
    case "SET-POLLS": {
      return {...state, polls: action.polls};
    }
    case "REMOVE-POLL": {
      return {...state, polls: state.polls.filter((poll) => {
        return !(poll.id === action.pollID)
      })};
    }
    case "SET-QUESTIONS": {
      return {...state, questions: action.questions}
    }
    case "SET-CURRENT-POLL": {
      return {...state, currentPoll: action.poll}
    }
    default: return state
  }
}

export default poolsReducer;

export const setPollsAC = (polls: TPoll[]) => ({type: "SET-POLLS", polls} as const);
export const removePollAC = (pollID: number) => ({type: "REMOVE-POLL", pollID} as const);
export const setQuestionsAC = (questions: Array<TQuestion>) => ({type: "SET-QUESTIONS", questions} as const);
export const setCurrentPollAC = (poll: any) => ({type: "SET-CURRENT-POLL", poll} as const);