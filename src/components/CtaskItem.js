/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-empty */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BsChevronCompactUp, BsChevronCompactDown, BsReception0, BsPencil,
  BsBookmarks,
} from 'react-icons/bs';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ListGroup from './ClistGroup';

function TaskItem({
  id, kdMember, nmMember, kdTask, task, deadline, deskripsi, selesai, goDel, dtgroup,
}) {
  const [open, setopen] = useState(!selesai);
  const [checked, setchecked] = useState(selesai);
  const [dgroup, setdgroup] = useState(dtgroup);
  const [date, setdate] = useState(deadline);
  const updChecked = () => {
    // setopen(!open);
    setchecked(!checked);
  };
  const toggleContent = () => {
    setopen(!open);
  };

  const selected = [dtgroup[Math.floor(Math.random() * (8 - 1) + 1)]];
  return (
    <div className="containerTaskList">
      <div className="headers">
        <div>
          <input type="checkbox" className="hw20px" checked={checked} onChange={() => updChecked()} />
        </div>
        <span className={`title1 ${(selesai ? 'tdel' : '')}`}>{task}</span>
        <span className="cred title3 itemCenter">{`${Math.floor(Math.random() * (10 - 1) + 1)} Days Left`}</span>
        <span className="title3 itemCenter">{deadline}</span>
        <div className="">
          {
            (open
              ? (<BsChevronCompactDown className="title2" onClick={toggleContent} />)
              : (<BsChevronCompactUp className="title2" onClick={toggleContent} />)
            )
          }
        </div>
        <div className="dropdown">
          <BsReception0 className="title2 iconPosBottom5" />
          <div className="dropdown-content right10">
            <Link className="cred">Delete</Link>
          </div>
        </div>
      </div>
      <div className={`content ${!open && 'dnone'}`}>
        <div className="itemCenter">
          <AiOutlineFieldTime className="ficons primary" />
        </div>
        <div>
          <input type="date" value={date} onChange={setdate} />
        </div>
        <div className="itemCenter">
          <BsPencil className="ficons primary" />
        </div>
        <div>
          <span>{deskripsi}</span>
        </div>
        <div className="itemCenter">
          <BsBookmarks className="ficons primary" />
        </div>
        <div>
          <div className="dropdown">
            <div className="itemGroupSelected">
              <ListGroup dtgroup={selected} setgroup={setdgroup} select />
            </div>
            <div className="dropdown-content">
              <ListGroup dtgroup={dgroup} setgroup={setdgroup} select />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TaskItem.propTypes = {
  dtgroup: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  kdMember: PropTypes.string.isRequired,
  nmMember: PropTypes.string.isRequired,
  kdTask: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  deskripsi: PropTypes.string.isRequired,
  selesai: PropTypes.bool.isRequired,
  goDel: PropTypes.func.isRequired,
};

export default TaskItem;
