/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
// import { loadingBarReducer } from 'react-redux-loading-bar';

import listReducer from './listInbox/reducer';
import itemReducer from './itemInbox/reducer';
import taskReducer from './listTask/reducer';
import sessionReducer from './session/reducer';

const store = configureStore({
  reducer: {
    dtlist: listReducer,
    dtitem: itemReducer,
    sess: sessionReducer,
    dttask: taskReducer,
  },
});
export default store;
