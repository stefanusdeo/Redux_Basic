import { configureStore } from '@reduxjs/toolkit';
import conterReducer from './Counter';
import authReducer from './Auth';

// const conterReducer = (state = initialState, action) => {
//   if (action.type === 'ADD') {
//     return {
//       conter: state.conter + 1,
//       showNumber: state.showNumber,
//     };
//   }

//   if (action.type === 'DYNAMIC') {
//     return {
//       conter: state.conter + action.value,
//       showNumber: state.showNumber,
//     };
//   }

//   if (action.type === 'MIN') {
//     return {
//       conter: state.conter - 1,
//       showNumber: state.showNumber,
//     };
//   }

//   if (action.type === 'TOGGLE') {
//     return {
//       conter: state.conter,
//       showNumber: !state.showNumber,
//     };
//   }
//   return state;
// };

// const store = createStore(conterReducer);
const store = configureStore({
  reducer: { counter: conterReducer, auth: authReducer },
});

export default store;
