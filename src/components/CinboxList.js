/* eslint-disable no-empty */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import InboxItem from './CinboxItem';

function InboxList({
  dtItem, goUpd, goDel, goShare, goReply, xkdMember,
}) {
  return dtItem.map((dt, ind) => (
    <InboxItem
      key={dt.id}
      {...dt}
      end={(ind === dtItem.length - 1)}
      xkdMember={xkdMember}
      ind={ind}
      goUpd={goUpd}
      goDel={goDel}
      goShare={goShare}
      goReply={goReply}
    />
  ));
}

InboxList.propTypes = {
  dtItem: PropTypes.array.isRequired,
  xkdMember: PropTypes.string.isRequired,
  goUpd: PropTypes.func.isRequired,
  goDel: PropTypes.func.isRequired,
  goShare: PropTypes.func.isRequired,
  goReply: PropTypes.func.isRequired,
};

export default InboxList;
