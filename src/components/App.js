import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { fetchUsers, removeUsers } from "../actions";
import UserList from "./UserList/UserList";
import Spinner from "./Spinner/Spinner";

class App extends React.Component {
  state = { query: "" };

  onInputChange = (event) => {
    // Use setState function form to prevent asynchronous
    this.setState({ query: event.target.value }, () => {
      // Clear users list
      if (this.state.query.length < 3 || this.state.query.length <= 0) {
        this.props.removeUsers();
        return;
      }
      // Fetch users list when more than 3 characters were entered
      // Non debounce version
      // this.props.fetchUsers(this.state.query);

      // Debounce version
      this.fetchAllUsers();
    });
  };

  renderUserList = () => {
    if (this.props.isLoading) {
      return <Spinner />;
    } else {
      return <UserList users={this.props.users} />;
    }
  };

  fetchAllUsers = _.debounce(() => {
    this.props.fetchUsers(this.state.query);
  }, 600);

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
        {this.renderUserList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users.users, isLoading: state.users.isLoading };
};

export default connect(mapStateToProps, {
  fetchUsers,
  removeUsers,
})(App);
