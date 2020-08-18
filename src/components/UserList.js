import React from "react";

import UserItem from "./UserItem";

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

export default UserList;
