import { listType } from './action';

function listReducer(list = [], action = {}) {
  switch (action.type) {
    case listType.set:
      return action.payload.list;
    default:
      return list;
  }
}

export default listReducer;
