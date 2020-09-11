import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import UserItem from "../UserItem/UserItem";

configure({ adapter: new Adapter() });

describe("<UserItem />", () => {
  let wrapper;
  let user;
  beforeEach(() => {
    user = {
      name: "jakeluong",
      avatar: "/jake.png",
      type: "User",
      score: 1,
    };
    wrapper = shallow(<UserItem {...user} />);
  });

  it("should be rendered successfully", () => {
    expect(wrapper.length).toBe(1);
  });

  it("should render a user's avatar", () => {
    expect(wrapper.find(".img-thumbnail")).toHaveLength(1);
  });

  it("should render user's name correctly based on props", () => {
    expect(wrapper.find("span").text()).toEqual(user.name);
  });

  it("should render user's type correctly based on props", () => {
    let userType = wrapper.find("td").filterWhere((n) => {
      return n.text() === "User";
    });
    expect(userType.text()).toEqual(user.type);
  });

  it("should render user's type correctly based on props", () => {
    let userScore = wrapper.find("td").filterWhere((n) => {
      return n.text() === "User";
    });
    expect(userScore.text()).toEqual(user.score);
  });
});
