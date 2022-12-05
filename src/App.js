import React, {useState} from "react";
import Main from "./components/main";
import User from "./components/user";
import Button from "./components/button";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count+1)
  }
  return (
    <div>
      <Main />
      <User />
      <Button />
    </div>
  );
}

export default App;
