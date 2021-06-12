

const initialState = {
  initialized: false
}

type TState = typeof initialState;
type TAppActions = ReturnType<typeof initializedSuccess>;

const appReducer = (state: TState = initialState, action: TAppActions) => {
  switch (action.type) {
    case "INITIALIZED-SUCCESS": {
      return {...state, initialized: true}
    }
    default: return state;
  }
}

export const initializedSuccess = () => ({type: "INITIALIZED-SUCCESS"} as const);

export default appReducer;