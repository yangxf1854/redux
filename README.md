###目录
src/
├── actions
│ └── cart-actions.js
├── index.js
├── reducers
│ ├── cart-reducer.js
│ ├── index.js
│ └── products-reducer.js
└── store.js
###react-redux
工作流程：

###首先，用户发出 Action
store.dispatch(action);

###然后，Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State 。
let nextState = todoApp(previousState, action);

###State 一旦有变化，Store 就会调用监听函数
store.subscribe(listener);

###store.subscribe 方法返回一个函数，调用这个函数就可以解除监听。
let unsubscribe = store.subscribe(() =>
console.log(store.getState())
);
unsubscribe();

###Redux 提供了一个 combineReducers 方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
