import React from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions";
import UserList from "./UserList";

class App extends React.Component {
  state = { query: "" };

  onInputChange = (event) => {
    // Use setState function form to prevent asynchronous
    this.setState({ query: event.target.value }, () => {
      // Enforced at least 3 characters were entered
      if (this.state.query.length < 3) {
        return;
      }
      this.props.fetchUsers(this.state.query);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1>Github Search User</h1>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                name="searchInput"
                value={this.state.query}
                onChange={this.onInputChange}
              />
            </div>
          </div>
        </div>
        <UserList users={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users.users };
};

export default connect(mapStateToProps, {
  fetchUsers,
})(App);
