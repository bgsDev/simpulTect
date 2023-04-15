/* eslint-disable prefer-const */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { BsArrowLeft } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FinputGR } from './Finput';
import useInput from '../hooks/useInput';
import { setList } from '../states/listInbox/action';
import { setItem, addItem } from '../states/itemInbox/action';
import InboxGroup from './CinboxGroup';
import InboxList from './CinboxList';

function ChatInbox({ btnClose }) {
  const { dtlist, dtitem } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loader, setloader] = useState(true);
  const [balas, setbalas] = useState({});
  const [search, setsearch] = useInput('');
  const [msgnewMessage, setmsgnewMessage] = useState(false);
  const [idDetail, setidDetail] = useState(0);

  const xkdMember = '2g18-1';
  const [newMessage, setnewMessage] = useInput('');

  useEffect(() => {
    onOffLoading();
    dispatch(setList());
    dispatch(setItem({ id: 1 }));
  }, [dispatch]);

  const onOffLoading = () => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 1000);
  };
  const onOffMsgNew = () => {
    setmsgnewMessage(true);
    setTimeout(() => {
      setmsgnewMessage(false);
    }, 500);
  };
  const goDetail = (id) => {
    setidDetail(id);
    onOffLoading();
    dispatch(setItem({ id }));
  };
  const addMessage = () => {
    // console.log('sasa');
    onOffMsgNew();
    dispatch(addItem({ msg: newMessage, balas, id: dtitem.inbox.length + 1 }));
    setnewMessage({ target: { value: '' } });
    setbalas({});
  };

  const dtFilter = dtlist.filter((dt) => dt.group.toUpperCase().includes(search.toUpperCase()));

  // item action
  const goUpd = (idGroup, id) => {
    setidDetail(id);
    // dispatch(setItem({ id }));
  };
  const goDel = (idGroup, id) => {
    setidDetail(id);
    // dispatch(setItem({ id }));
  };
  const goShare = (idGroup, id) => {
    setidDetail(id);
    // dispatch(setItem({ id }));
  };
  const goReply = ({
    id, kdMember, nmMember, msg,
  }) => {
    setbalas({
      idGroup: dtitem.id,
      id,
      kdMember,
      nmMember,
      msg,
    });
    // dispatch(setItem({ id }));
  };
  const cancelReply = () => {
    setbalas({});
  };
  if (idDetail === 0) {
    return (
      <div className="containerFormChat">
        <FinputGR
          icon={<FiSearch />}
          clsIcon=""
          cls=""
          plac="Search"
          type="text"
          value={search}
          onchange={setsearch}
        />
        {
            (loader
              ? (
                <div className="sizeForm flexItemCenter">
                  <div>
                    <div className="loader mauto" />
                    <span>Loading Chats...</span>
                  </div>
                </div>
              )
              : (
                <div className="sizeForm listGroup">
                  <InboxGroup dtlist={dtFilter} goDetail={goDetail} />
                </div>
              )
            )
        }
      </div>
    );
  }
  if (Object.keys(dtitem).length > 0) {
    return (
      <div className="containerFormListChar">
        <div className="headerInboxList">
          <Link className="btn flexItemCenter" onClick={() => setidDetail(0)}>
            <BsArrowLeft className="ficons" />
          </Link>
          <div className="title">
            <p className="title">{dtitem.nmGroup}</p>
            <p className="title2">{`${dtitem.paticipants.length} paticipants`}</p>
          </div>
          <Link className="btn flexItemCenter" onClick={() => btnClose()}>
            <IoMdClose className="ficons" />
          </Link>
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
                    <InboxList dtItem={dtitem.inbox}
                      xkdMember={xkdMember}
                      goUpd={goUpd}
                      goDel={goDel}
                      goReply={goReply}
                      goShare={goShare}
                    />
                    <br />
                    <div className={`newMessage ${(!msgnewMessage ? 'dnone' : '')}`}>
                      <button type="button"
                        className="button binfo mauto"
                        onClick={() => {}}
                      >
                        new message...
                      </button>
                    </div>
                  </div>
                )
              )
          }
        <div className="listChatAdd">
          <div className={`replyChat ${(Object.keys(balas).length === 0 ? 'dnone' : '')}`}>
            <div className="flexSpaceBetween">
              <p className="title2 w80p">{`Replying to ${balas.nmMember}`}</p>
              <Link onClick={() => cancelReply()}>
                <AiOutlineCloseCircle className="fz20px" />
              </Link>
            </div>
            <p className="title3 cgrayText">{balas.msg}</p>
          </div>
          <input className=""
            type="text"
            placeholder="Type a new message"
            value={newMessage}
            onChange={setnewMessage}
          />
          <button type="button"
            className="button"
            onClick={() => addMessage()}
          >
            Send
          </button>
        </div>
        <br />
      </div>
    );
  }
}

ChatInbox.propTypes = {
  btnClose: PropTypes.func.isRequired,
};

export default ChatInbox;
