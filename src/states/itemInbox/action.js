import data from './data';

const listType = {
  set: 'setItem',
  add: 'addItem',
};
function actSetItem(item) {
  return {
    type: listType.set,
    payload: {
      item,
    },
  };
}
function setItem({ id }) {
  return async (dispatch) => {
    try {
      //   const list = await api.allThread();
      dispatch(actSetItem(data.getData()));
    } catch (error) {
      alert(error.message);
    }
  };
}

function addItem({ msg, balas, id }) {
  return async (dispatch) => {
    try {
      const date = new Date();
      dispatch(actSetItem(data.addMsg({
        id,
        kdMember: '2g18-1',
        nmMember: 'Bagus H',
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        time: `${date.getHours()}:${date.getMinutes()}`,
        msg,
        read: false,
        today: false,
        balas,
      })));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  listType,
  setItem,
  addItem,
};
