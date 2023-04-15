/* eslint-disable prefer-const */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ListGroup({ dtgroup, setgroup, select }) {
  // if (select) {
  //   return dtgroup.map((v, i) => (
  //     <Link key={v.kdGroup} className={v.class} onClick={() => null}>{v.nmGroup}</Link>
  //   ));
  // }
  return dtgroup.map((v, i) => (
    <Link key={v.kdGroup} className={v.class} onClick={() => null}>{v.nmGroup}</Link>
  ));
}
ListGroup.propTypes = {
  dtgroup: PropTypes.array.isRequired,
  setgroup: PropTypes.func.isRequired,
  select: PropTypes.bool.isRequired,
};
export default ListGroup;
