import data from './data';

const name = 'Task';
const typeTask = {
  set: `set${name}`,
  add: `add${name}`,
};
function actSetTask(dt) {
  return {
    type: typeTask.set,
    payload: dt,
  };
}
function setTask() {
  return async (dispatch) => {
    try {
      //   const list = await api.allThread();
      // dispatch(actSetTask(dataItem));
      dispatch(actSetTask(data.getData()));
    } catch (error) {
      alert(error.message);
    }
  };
}
function addTask({
  id, kdTask = 1, task, deadline, deskripsi,
}) {
  return async (dispatch) => {
    try {
      dispatch(actSetTask(data.addMsg({
        id,
        kdMember: '2g18-1',
        nmMember: 'Bagus H',
        kdTask,
        task,
        deadline,
        deskripsi,
        selesai: false,
      })));
    } catch (error) {
      alert(error.message);
    }
  };
}
export {
  typeTask,
  setTask,
  addTask,
};
