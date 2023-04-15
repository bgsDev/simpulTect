/* eslint-disable prefer-const */
const dataItem = {
  id: 1,
  nmGroup: '109220-Naturalization',
  paticipants: [
    {
      kdMember: '2g18-1',
      nmMember: 'Bagus H',
    }, {
      kdMember: '2g18-2',
      nmMember: 'mary hilda',
    }, {
      kdMember: '2g18-3',
      nmMember: 'Obaidullah Amarkhil',
    },
  ],
  inbox: [
    {
      id: 1,
      kdMember: '2g18-1',
      nmMember: 'Bagus H',
      date: 'june 08, 2021',
      time: '19:32',
      msg: 'No worries, it will be complate ASAP. I`ve asked him yesterday',
      read: true,
      today: false,
      balas: {},
    }, {
      id: 2,
      kdMember: '2g18-2',
      nmMember: 'mary Hilda',
      date: 'june 08, 2021',
      time: '19:32',
      msg: 'No worries, it will be complate ASAP. I`ve asked him yesterday No worries, it will be complate ASAP. I`ve asked him yesterday No worries, it will be complate ASAP. I`ve asked him yesterday',
      read: true,
      today: true,
      balas: {},
    }, {
      id: 3,
      kdMember: '2g18-1',
      nmMember: 'Bagus H',
      date: 'june 08, 2021',
      time: '19:32',
      msg: 'pleasae contact marry',
      read: true,
      today: false,
      balas: {},
    }, {
      id: 4,
      kdMember: '2g18-3',
      nmMember: 'Obaidullah Amarkhil',
      date: 'june 08, 2021',
      time: '19:32',
      msg: 'pleasae contact marry',
      read: false,
      today: false,
      balas: {},
    },
  ],
};
let tamMSG = [];
const data = {
  getData() {
    return dataItem;
  },
  conver() {
    return JSON.stringify(dataItem);
  },
  addMsg(dtMsg) {
    tamMSG.push(dtMsg);
    let dt = JSON.parse(this.conver());
    dt.inbox = [...dt.inbox, ...tamMSG];
    return dt;
  },
};
export default data;
