import React, { createContext, useReducer } from "react";

const cart = {
  item: [1, 3, 45, 4],
  user_id: "lek"
}
const reducerType = {
  addUserID: "addUserID",
  addItem: "addItem"
}
const cartContext = createContext(cart)
const CartContextProvider = ({ children }) => {
  const [state, cartDispatch] = useReducer(cartReducer, cart)
  const changUserID = (payload) => {
    cartDispatch({ type: reducerType.addUserID, payload })
  }
  const func = { changUserID, ...state }
  return (
    <cartContext.Provider value={func}>
      {children}
    </cartContext.Provider>
  )
}
export { cartContext, CartContextProvider }

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        item: [...state.item, action.payload]
      }
    case reducerType.addUserID:
      return {
        ...state,
        user_id: action.payload
      }
    default:
      return state
  }
}