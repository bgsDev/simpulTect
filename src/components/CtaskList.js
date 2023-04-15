/* eslint-disable no-empty */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './CtaskItem';

function TaskList({
  dtlist, goDel, dtgroup,
}) {
  return dtlist.map((dt) => (
    <TaskItem key={dt.id} {...dt} goDel={goDel} dtgroup={dtgroup} />
  ));
}

TaskList.propTypes = {
  dtgroup: PropTypes.array.isRequired,
  dtlist: PropTypes.array.isRequired,
  goDel: PropTypes.func.isRequired,
};

export default TaskList;
