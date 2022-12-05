import React, {useState} from "react";
import Main from "./components/main";
import User from "./components/user";
import Button from "./components/button";
import Toggle from "./components/toggle";
import Timers from "./components/timers";
import Todos from "./components/curd/todos";

function App() {
  
  return (
    <div>
      <Main />
      <User />
      <Button />
      <Toggle />
      <Timers />
      <Todos />
    </div>
  );
}

export default App;
