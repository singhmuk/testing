import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PaasName from "../components/passname"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders with or without a name", () => {
  act(() => {
    render(<PaasName />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<PaasName name="Jenny" />, container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<PaasName name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});
