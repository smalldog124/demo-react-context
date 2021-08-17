import { actionType } from "./action"
export const initialState = {
  item: [],
  user_id: "",
  total: 0
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.addItem:
      return {
        ...state,
        item: [...state.item, action.item],
      }
    case actionType.removeItem:
      return {
        ...state,
        item: state.item.filter((e) => e !== action.item),
      }

    default:
      return state
  }
}