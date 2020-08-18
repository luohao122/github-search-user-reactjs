import React from "react";

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

export default UserItem;
