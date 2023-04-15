/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { listType } from './action';

function itemReducer(item = [], action = {}) {
  switch (action.type) {
    case listType.set:
      return action.payload.item;
    case listType.add:
      // console.log(action.payload);
      // item.inbox = [item.inbox, action.payload.item];
      return item;
    default:
      return item;
  }
}

export default itemReducer;
