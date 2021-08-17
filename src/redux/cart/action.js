export const addToCart = (item) => {
  return {
    type: actionType.addItem,
    item
  }
}

export const removeToCart = (item) => {
  return {
    type: actionType.removeItem,
    item
  }
}

export const actionType = {
  addItem: "addItem",
  removeItem: "removeItem"
}