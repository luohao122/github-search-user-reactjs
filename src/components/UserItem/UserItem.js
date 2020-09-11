import React from "react";
import PropTypes from "prop-types";

import classes from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <tr>
      <td>
        <img
          className={`${classes.UserAvatar} img-thumbnail mr-4`}
          src={props.avatar}
          alt={props.name}
          title={props.name}
        />
        <span className={`${classes.UserName}`}>{props.name}</span>
      </td>
      <td>{props.type}</td>
      <td>{props.score}</td>
    </tr>
  );
};

UserItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default UserItem;
