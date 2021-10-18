import { ActionType } from "../ActionTypes"
import { Dispatch } from "redux"
import { Action } from "../Actions"

export const AddNumber = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD,
      payload: amount
    })
  }
}

export const ReduceNumber = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REDUCE,
      payload: amount
    })
  }
}

export const DefaultNumber = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEFAULT
    })
  }
}