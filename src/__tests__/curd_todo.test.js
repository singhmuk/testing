import React from "react";
import Todo from "../components/curd/todo";
import { mount } from "enzyme";
// import Adapter from 'enzyme-adapter-react-15';

test("TodoComponent calls doneChange when todo is clicked", () => {
  const todo = { id: 1, done: false, name: "Buy Milk" };
  const doneChange = jest.fn();
  const wrapper = mount(<Todo todo={todo} doneChange={doneChange} />);

  const p = wrapper.find(".toggle-todo");
  p.simulate("click");
  expect(doneChange).toBeCalledWith(1);
});
