const redux = required('redux');
const INITAIAL_VALUE = {
  counter: 0
};
const reducer = (store = INITAIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === 'increment') {
    newStore = { counter: store.counter + 1 }
  } else if (action.type === 'Decrement') {
    newStore = { counter: store.counter - 1 };
  }
  // console.log("reducer called",action);
  return newStore;
}

const store = redux.createStore();
const subscriber = () => {
  const state = store.getstate();
  console.log(state);
}
store.subscriber(subscriber);
store.dispatch({ type: 'Increment' });
store.dispatch({ type: 'Decrement' });
store.dispatch({ type: 'Increment' });