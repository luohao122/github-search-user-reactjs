import React from "react";
import PropTypes from "prop-types";

import UserItem from "../UserItem/UserItem";

const UserList = (props) => {
  const renderUserItem = () => {
    return props.users.map((user) => {
      return (
        <UserItem
          key={user.id}
          name={user.login}
          avatar={user.avatar_url}
          type={user.type}
          score={user.score}
        />
      );
    });
  };

  return (
    <div className="table-responsive mt-5">
      <h2>Result</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Type</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>{renderUserItem()}</tbody>
      </table>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
