/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { typeSession } from './action';

function sessionReducer(item = [], action = {}) {
  switch (action.type) {
    case typeSession.set:
      return action.payload;
    default:
      return item;
  }
}

export default sessionReducer;
