/* eslint-disable prefer-const */
let dataItem = {
  id: 1,
  task: [
    {
      kdTask: 1,
      nmTask: 'Personal Errands',
    }, {
      kdTask: 2,
      nmTask: 'Urgent To-do',
    },
  ],
  allGroup: [
    {
      kdGroup: 1,
      nmGroup: 'important  ASAP',
      class: 'group1',
    }, {
      kdGroup: 2,
      nmGroup: 'Offline Meeting',
      class: 'group2',
    }, {
      kdGroup: 3,
      nmGroup: 'virtual  Meeting',
      class: 'group3',
    }, {
      kdGroup: 4,
      nmGroup: 'ASAP',
      class: 'group4',
    }, {
      kdGroup: 5,
      nmGroup: 'Client Related',
      class: 'group5',
    }, {
      kdGroup: 6,
      nmGroup: 'Self Group',
      class: 'group6',
    }, {
      kdGroup: 7,
      nmGroup: 'Appointments',
      class: 'group7',
    }, {
      kdGroup: 8,
      nmGroup: 'Court Related',
      class: 'group8',
    },
  ],
  allTask: [{
    id: 1,
    kdMember: '2g18-1',
    nmMember: 'Bagus H',
    kdTask: 1,
    task: 'Close Off Case',
    deadline: '2021-06-12',
    deskripsi: 'closing off this case since this application has ben cancelled, No one really',
    selesai: false,
    group: [],
  }, {
    id: 2,
    kdMember: '2g18-1',
    nmMember: 'Bagus H',
    kdTask: 1,
    task: 'Set up Document report for several cases',
    deadline: '2021-06-12',
    deskripsi: 'all cases mush include payment transactions this application has ben cancelled, No one really',
    selesai: false,
    group: [],
  }, {
    id: 3,
    kdMember: '2g18-1',
    nmMember: 'Bagus H',
    kdTask: 2,
    task: 'set up appointment with dr blake',
    deadline: '2021-06-12',
    deskripsi: 'closing off this case since this application has ben cancelled, No one really',
    selesai: false,
    group: [],
  }, {
    id: 4,
    kdMember: '2g18-1',
    nmMember: 'Bagus H',
    kdTask: 1,
    task: 'Contact Mr. caleb vidio reference?',
    deadline: '2021-06-12',
    deskripsi: 'closing off this case since this application has ben cancelled, No one really',
    selesai: true,
    group: [],
  }, {
    id: 5,
    kdMember: '2g18-1',
    nmMember: 'Bagus H',
    kdTask: 2,
    task: 'assign 3 homework to client a',
    deadline: '12-06-2021',
    deskripsi: 'closing off this case since this application has ben cancelled, No one really',
    selesai: true,
    group: [],
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
    dt.allTask = [...dt.allTask, ...tamMSG];
    return dt;
  },
};
export default data;
