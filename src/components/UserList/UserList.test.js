import React from "react";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import UserItem from "../UserItem/UserItem";

configure({ adapter: new Adapter() });

describe("<UserList />", () => {
  let mockRenderUserItem;
  beforeEach(() => {
    mockRenderUserItem = jest.fn((users) => {
      return users.map((user) => {
        return <UserItem key={user.id} {...user} />;
      });
    });
  });

  it("should call renderUserItem function at least one time", () => {
    mockRenderUserItem([
      { id: 1, name: "jake", avatar: "/jake.png", type: "User", score: 1 },
    ]);

    expect(mockRenderUserItem.mock.calls.length).toBe(1);
  });

  it("should render <UserItem /> component at least one time", () => {
    mockRenderUserItem([
      { id: 1, name: "jake", avatar: "/jake.png", type: "User", score: 1 },
    ]);
    expect(mockRenderUserItem.mock.results[0].value).toHaveLength(1);
  });

  it("should render a list of more than or equal to three <UserItem /> components", () => {
    mockRenderUserItem([
      { id: 1, name: "jake", avatar: "/jake.png", type: "User", score: 1 },
      { id: 2, name: "jake", avatar: "/jake.png", type: "User", score: 1 },
      { id: 3, name: "jake", avatar: "/jake.png", type: "User", score: 1 },
    ]);
    expect(
      mockRenderUserItem.mock.results[0].value.length
    ).toBeGreaterThanOrEqual(3);
  });
});
