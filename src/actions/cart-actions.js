// src/actions/cart-actions.js

export const ADD_TO_CART = "ADD_TO_CART"; // 添加
export const UPDATE_CART = "UPDATE_CART"; // 修改
export const DELETE_FROM_CART = "DELETE_FROM_CART"; // 删除

// 添加
export function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  };
}

// 修改
export function updateCart(product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: { product, quantity, unitCost }
  };
}

// 删除
export function deleteFromCart(product, quantity, unitCost) {
  return {
    type: DELETE_FROM_CART,
    payload: { product }
  };
}
