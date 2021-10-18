import { ActionType } from "../ActionTypes";

interface AddAction {
  type: ActionType.ADD,
  payload: number
}

interface ReduceAction {
  type: ActionType.REDUCE,
  payload: number
}

interface DefaultAction {
  type: ActionType.DEFAULT
}

export type Action = AddAction | ReduceAction | DefaultAction;