/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable keyword-spacing */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsChevronCompactDown } from 'react-icons/bs';
import TaskList from './CtaskList';
import { setTask, addTask } from '../states/listTask/action';
import FormAddTask from './CformAddTask';

function ChatTask() {
  const { dttask } = useSelector((state) => state);
  const [loader, setloader] = useState(true);
  const [mytask, setmytask] = useState('My Tasks');
  const [kdTask, setkdtask] = useState(1);
  const [taskSelected, settaskSelected] = useState(0);
  const dispatch = useDispatch();
  const [btnAdd, setbtnAdd] = useState(false);

  useEffect(() => {
    onOffLoader();
    dispatch(setTask());
  }, [dispatch]);

  const onOffLoader = () => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 1000);
  };

  const updMyTask = (ind) => {
    onOffLoader();
    settaskSelected(dttask.task[ind].kdTask);
    setmytask(dttask.task[ind].nmTask);
    setkdtask(dttask.task[ind].kdTask);
  };
  const goDel = (idGroup, id) => {
    // setidDetail(id);
    // dispatch(setItem({ id }));
  };

  const updbtnAdd = () => {
    setbtnAdd(!btnAdd);
  };

  const saveNewTask = ({ task, date, msg }) => {
    setbtnAdd(!btnAdd);
    dispatch(addTask({
      id: dttask.allTask.length + 1,
      kdTask,
      task,
      deadline: date,
      deskripsi: msg,
    }));
  };
  const cancelNewTask = () => {
    setbtnAdd(!btnAdd);
  };

  if (Object.keys(dttask).length > 0) {
    // console.log(dttask.allGroup);
    let dtFilter = dttask.allTask;
    if(taskSelected > 0) {
      dtFilter = dttask.allTask.filter((dt) => dt.kdTask === taskSelected);
    }
    return (
      <div className="containerFormListChar">
        <div className="headerTaskList">
          <div className="dropdown">
            <div className="myTask">
              <p>
                {mytask}
                <BsChevronCompactDown className="ficons iconPosTop5" />
              </p>
            </div>
            <div className="dropdown-content">
              {
                dttask.task.map((v, i) => <Link key={v.kdTask} className="" onClick={() => updMyTask(i)}>{v.nmTask}</Link>)
              }
              {/* <Link className="">Personal Errands</Link>
                <Link className="">Urgent To-do</Link> */}
            </div>
          </div>
          <button
            type="button"
            className="button"
            onClick={() => updbtnAdd()}
          >
            New Task
          </button>
        </div>
        {
              (loader
                ? (
                  <div className="sizeForm flexItemCenter">
                    <div>
                      <div className="loader mauto" />
                      <span>Loading...</span>
                    </div>
                  </div>
                )
                : (
                  <div className="sizeForm listChat">
                    <TaskList
                      dtlist={dtFilter}
                      dtgroup={dttask.allGroup}
                      goDel={goDel}
                    />
                  </div>
                )
              )
        }
        <div className={`listChat ${(btnAdd ? '' : 'dnone')}`}>
          <FormAddTask saveNewTask={saveNewTask} cancel={cancelNewTask} />
        </div>
      </div>
    );
  }
}

export default ChatTask;
