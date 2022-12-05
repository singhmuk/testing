import React, {useState} from "react";

function Button() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count+1)
  }
  return (
    <div data-testid="rootdiv">
      <h1>Testing basics</h1>
      <input type="text" placeholder="type name here" />
      <button>test button</button>
      <br/>
      {count}<br/>
      <button onClick={handleCount}>count</button>
      <ul>
        <li>Reactjs</li>
        <li>Redux</li>
      </ul>
    </div>
  );
}

export default Button;
