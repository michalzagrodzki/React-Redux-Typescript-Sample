import { Action } from "./../Actions"
import { ActionType } from "./../ActionTypes"

type State = {
  counter: number
}

const initialState: State = {
  counter: 0
}

const reducers = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    case ActionType.ADD:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case ActionType.REDUCE:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case ActionType.DEFAULT:
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
}

export default reducers;