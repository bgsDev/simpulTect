const listType = {
  set: 'setList',
  get: 'getList',
};

const dataList = [
  {
    id: 1,
    group: '109220-Naturalization',
    date: 'January 1, 2021 19:10',
    participants: 3,
    noteRed: true,
    endChat: {
      name: 'Cameron Philips',
      msg: 'please check this out',
    },
  }, {
    id: 2,
    group: 'jeannete Moraima Guaman Chamba (Hutto 1-589) [Hutto Follow Up - Brief Service]',
    date: '02/06/2021 10:45',
    participants: 5,
    noteRed: false,
    endChat: {
      name: 'Ellen',
      msg: 'Hey, please read.',
    },
  }, {
    id: 3,
    group: '8405-Diana SALAZAR MUNGUIA',
    date: '01/06/2021 12:19',
    participants: 2,
    noteRed: false,
    endChat: {
      name: 'Cameron Philips',
      msg: 'I understand your initial concerns and thats very valid, Elizabeth. But you agines',
    },
  }, {
    id: 4,
    group: 'FastVisa Suppport',
    date: '01/06/2021 12:19',
    participants: 1,
    noteRed: false,
    endChat: {
      name: 'FastVisa Suppport',
      msg: 'Hey there! Welcome to your inbox.',
    },
  },
];

function actSetList(list) {
  return {
    type: listType.set,
    payload: {
      list,
    },
  };
}
function setList() {
  return async (dispatch) => {
    try {
      //   const list = await api.allThread();
      dispatch(actSetList(dataList));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  listType,
  setList,
};
