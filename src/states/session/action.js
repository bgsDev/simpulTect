/* eslint-disable prefer-const */
const name = 'Session';
const typeSession = {
  set: `set${name}`,
  add: `add${name}`,
};
let data = {
  kdMember: '2g18-1',
  nmMember: 'Bagus H',
};
function actSetSession(dt) {
  return {
    type: typeSession.set,
    payload: dt,
  };
}
function setSession({ kdMember }) {
  return async (dispatch) => {
    try {
      //   const list = await api.allThread();
      dispatch(actSetSession(data));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  typeSession,
  setSession,
};
