/* eslint-disable no-empty */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function InboxGroupItem({
  id, group, date, participants, noteRed, endChat, goDetail,
}) {
  let { msg } = endChat;
  if (msg.length > 76) {
    msg = `${msg.substring(1, 76)}...`;
  }
  return (
    <>
      <div className="itemGroup">
        <div className="icon">
          {
            participants === 1
              ? (
                <button type="button" className="bprimary oneIcon">
                  <b className="icons">{endChat.name.substring(0, 1)}</b>
                </button>
              )
              : (
                <>
                  <button type="button" className="bdark">
                    <BsPerson className="icons" />
                  </button>
                  <button type="button" className="bprimary active">
                    <BsPerson className="icons" />
                  </button>
                </>
              )
          }
        </div>
        <Link className="msg" onClick={() => goDetail(id)}>
          <p className="title1 primary">{group}</p>
          <p className="title2 cblack">{endChat.name}</p>
          <p className="title3 cgrayText">{msg}</p>
        </Link>
        <p className="title3 cgrayText date">{date}</p>
      </div>
      <div className="posisiOvalRed">
        {
            (noteRed && <p className="ovalRed" />)
        }
      </div>
      <hr />
    </>
  );
}

InboxGroupItem.propTypes = {
  id: PropTypes.number.isRequired,
  group: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  participants: PropTypes.number.isRequired,
  noteRed: PropTypes.bool.isRequired,
  endChat: PropTypes.object.isRequired,
  goDetail: PropTypes.func.isRequired,
};

export default InboxGroupItem;
