/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { BsReception0 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { checkIdicator } from './sf/sf';

function InboxItem({
  id, kdMember, nmMember, date, time, msg, read, today, balas,
  goUpd, goDel, goShare, goReply, xkdMember, ind, end,
}) {
  const you = (kdMember === xkdMember && true);
  const indikator = checkIdicator(ind);

  const onreply = () => {
    goReply({
      id, kdMember, nmMember, msg,
    });
  };
  return (
    <>
      {
        (today
          && (
            <div className="flexR m2p">
              <hr />
              <b className="w40p talgC">{`Today, ${date}`}</b>
              <hr />
            </div>
          )
        )
      }
      {
        (end
          && (
            <div className="flexR m2p cindicator3">
              <hr className="cindicator3" />
              <b className="w40p talgC">New Message</b>
              <hr className="cindicator3" />
            </div>
          )
        )
      }
      <div className={`listChatContainer ${(you ? 'yourSend' : '')}`}>
        <p className={`cindicator1 ${(you ? 'talgR' : 'talgL')}`}>{(you ? 'you' : nmMember)}</p>
        <div className={`replyChatView ${(Object.keys(balas).length === 0 ? 'dnone' : '')}`}>
          <div className="flexSpaceBetween">
            <p className="title2 w80p">{`Replying to ${balas.nmMember}`}</p>
          </div>
          <p className="title3 cgrayText">{balas.msg}</p>
        </div>
        <div className="flexR mt4px">
          {
            (you
              ? (
                <>
                  <div className="listChatIcon">
                    <div className="dropdown">
                      <BsReception0 className="ficons" />
                      <div className="dropdown-content l0">
                        <Link className="primary">Edit</Link>
                        <Link className="cred">Delete</Link>
                      </div>
                    </div>
                  </div>
                  <div className="listChatMsg bindicator1">
                    <p className="">{msg}</p>
                    <p>{time}</p>
                  </div>
                </>
              )
              : (
                <>
                  <div className={`listChatMsg bindicator${indikator}`}>
                    <p className="">{msg}</p>
                    <p>{time}</p>
                  </div>
                  <div className="listChatIcon">
                    <div className="dropdown">
                      <BsReception0 className="ficons" />
                      <div className="dropdown-content r0">
                        <Link className="primary">Share</Link>
                        <Link className="primary" onClick={onreply}>Reply</Link>
                      </div>
                    </div>
                  </div>
                </>
              )
            )
          }
        </div>
      </div>
    </>
  );
}

InboxItem.propTypes = {
  id: PropTypes.number.isRequired,
  ind: PropTypes.number.isRequired,
  kdMember: PropTypes.string.isRequired,
  xkdMember: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  nmMember: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
  end: PropTypes.bool.isRequired,
  today: PropTypes.bool.isRequired,
  balas: PropTypes.object.isRequired,

  goUpd: PropTypes.func.isRequired,
  goDel: PropTypes.func.isRequired,
  goShare: PropTypes.func.isRequired,
  goReply: PropTypes.func.isRequired,
};

export default InboxItem;
