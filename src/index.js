import { createStore, combineReducers, reducer, Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
console.log("store", store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// // /*
// // @param state 是当前保存在store中的数据
// // @param action 是一个容器，用于：
// //     type--一个简单的字符串常量
// //     payload--用于更新状态的数据
// //  */
// // // const reducer = function(state = [], action) {
// // //   return state;
// // // };
// // // reducer 是接收旧的state，返回新的state
// // // const store = createStore(reducer);
// // const ADD_TO_CART = "ADD_TO_CART";
// // const initialState = {
// //   cart: [
// //     {
// //       product: "bread 700g",
// //       quantity: 2,
// //       unitCost: 90
// //     },
// //     {
// //       product: "milk 500ml",
// //       quantity: 1,
// //       unitCost: 47
// //     }
// //   ]
// // };
// // const productsReducer = function(state = [], action) {
// //   return state;
// // };
// // const carReducer = function(state = initialState, action) {
// //   switch (action.type) {
// //     case ADD_TO_CART: {
// //       return {
// //         ...state,
// //         cart: [...state.cart, action.payload]
// //       };
// //     }
// //     default:
// //       return state;
// //   }
// // };
// // const addToCart = (product, quantity, unitCost) => {
// //   return {
// //     type: ADD_TO_CART,
// //     payload: { product, quantity, unitCost }
// //   };
// // };
// // const allReducers = {
// //   products: productsReducer,
// //   shoppingCart: carReducer
// // };
// // const rootReducer = combineReducers(allReducers);
// // let store = createStore(rootReducer);

// // // 设置监听函数
// // let unsubscribe = store.subscribe(() => console.log("22", store.getState()));
// // store.dispatch(addToCart("Coffee 500gm", 1, 250)); // dispatch是发出action
// // store.dispatch(addToCart("Flour 1kg", 2, 110));
// // store.dispatch(addToCart("Juice 2L", 1, 250));
// // unsubscribe();
// // // console.log("initial state", store.getState()); // 当前状态
// import store from "./store.js";
// import { addToCart, updateCart, deleteFromCart } from "./actions/cart-actions";
// console.log("initial state: ", store.getState());
// let unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(addToCart("Coffee 500gm", 1, 250));
// store.dispatch(addToCart("Flour 1kg", 2, 110));
// store.dispatch(addToCart("Juice 2L", 1, 250));
// // Update Cart
// store.dispatch(updateCart("Flour 1kg", 5, 110));

// // Delete from Cart
// store.dispatch(deleteFromCart("Coffee 500gm"));
// unsubscribe();
