import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BsChevronCompactUp, BsChevronCompactDown, BsReception0, BsPencil,
} from 'react-icons/bs';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

function FormAddTask({
  saveNewTask, cancel,
}) {
  const [task, settask] = useInput('');
  const [open, setopen] = useState(true);
  const [date, setdate] = useInput('');
  const [msg, setmsg] = useInput('');
  const toggleContent = () => {
    setopen(!open);
  };
  const sendData = () => {
    saveNewTask({ task, date, msg });
  };
  const batalkan = () => {
    setdate({ target: { value: '' } });
    settask({ target: { value: '' } });
    setmsg({ target: { value: '' } });
    cancel();
  };
  return (
    <div className="containerTaskList">
      <div className="headers">
        <div>
          <input type="checkbox" className="hw20px" onChange={sendData} />
        </div>
        <span className="title1 ">
          <input type="text" placeholder="Type task title" className="hw20px" value={task} onChange={settask} />
        </span>
        <span className="cred title3 itemCenter" />
        <span className="title3 itemCenter" />
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
            <Link className="cred" onClick={batalkan}>Delete</Link>
          </div>
        </div>
      </div>
      <div className={`content ${!open && 'dnone'}`}>
        <div className="itemCenter">
          <AiOutlineFieldTime className="ficons primary" />
        </div>
        <div>
          <input type="date" className="w100p" value={date} onChange={setdate} />
        </div>
        <div className="itemCenter mt4px">
          <BsPencil className="ficons primary" />
        </div>
        <div className="mt4px">
          <input type="text" className="mnone" placeholder="deskripsi" value={msg} onChange={setmsg} />
        </div>
      </div>
    </div>
  );
}
FormAddTask.propTypes = {
  saveNewTask: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default FormAddTask;
