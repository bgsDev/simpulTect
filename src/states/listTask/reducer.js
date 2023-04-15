/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { typeTask } from './action';

function taskReducer(item = {}, action = {}) {
  switch (action.type) {
    case typeTask.set:
      return action.payload;
    default:
      return item;
  }
}

export default taskReducer;
