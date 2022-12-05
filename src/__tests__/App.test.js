import { render, screen, logRoles } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import App from '../App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

test('test 1', () => {
  render(<App />);
  logRoles(screen.getByTestId("rootdiv"))
  const buttonElem = screen.getByText("button", {name:'est button', exact:false});
  expect(buttonElem).toBeInTheDocument();
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
