/* eslint-disable no-empty */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import InboxGroupItem from './CinboxGroupItem';

function InboxGroup({
  dtlist, goDetail,
}) {
  return dtlist.map((dt) => (
    <InboxGroupItem key={dt.id} {...dt} goDetail={goDetail} />
  ));
}

InboxGroup.propTypes = {
  dtlist: PropTypes.array.isRequired,
  goDetail: PropTypes.func.isRequired,
};

export default InboxGroup;
